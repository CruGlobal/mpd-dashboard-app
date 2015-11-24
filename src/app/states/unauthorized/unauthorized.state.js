(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'unauthorized', {
			parent:  'app',
			url:     '',
			resolve: {
				'permissions': function ( $q, $state, User ) {
					var deferred = $q.defer();
					User.get().$promise.then( function ( user ) {
						var countries = _.sortBy( user.permissions.countries, 'name' ),
							accounts  = _.sortBy( user.permissions.accounts, 'name' );
						if ( countries.length === 0 && accounts.length === 0 ) {
							deferred.resolve( true );
						}
						else if ( countries.length !== 0 ) {
							if ( countries.length === 1 ) {
								var country = _.first( countries );
								$state.go( 'country', {id: country.id} );
							}
							else {
								$state.go( 'countries' );
							}
						}
						else {
							var account = _.first( accounts );
							$state.go( 'staffAccount', {id: account.id} );
						}
					}, function () {
						deferred.resolve( true );
					} );
					return deferred.promise;
				}
			},
			views:   {
				'@app': {
					templateUrl: 'app/states/unauthorized/unauthorized.html',
					controller:  function ( permissions ) {
						// require permissions so it gets resolved
					}
				}
			}
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.unauthorized', [
		// Dependencies
		'ui.router',
		'angular-growl',

		// Dependent States
		'mpdDashboard.states.app',
		'mpdDashboard.states.dashboard.countries',
		'mpdDashboard.states.dashboard.staffAccount',
		'mpdDashboard.states.dashboard.country'
	] ) );
