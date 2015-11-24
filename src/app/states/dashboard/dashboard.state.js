(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'dashboard', {
			abstract: true,
			parent:   'app',
			url:      '?estimated',
			resolve:  {
				'user':        function ( $log, User ) {
					return User.get().$promise;
				},
				'permissions': function ( $q, $state, user ) {
					var deferred     = $q.defer(),
						hasCountries = user.permissions.countries.length !== 0,
						hasAccounts  = user.permissions.accounts.length !== 0;

					if ( hasCountries || hasAccounts ) {
						deferred.resolve( user.permissions );
					}
					else {
						$state.go( 'unauthorized' );
						deferred.reject( 'unauthorized' );
					}
					return deferred.promise;
				},
				'estimated':   function ( $stateParams ) {
					return {estimated: $stateParams.estimated === 'false' ? false : true};
				}
			},
			views:    {
				'footer@app':     {
					template:   '<div ng-if="estimated.estimated" class="alert alert-estimated">*Based on estimated budget - as no budget has been submitted.</div>',
					controller: function ( $scope, estimated ) {
						$scope.estimated = estimated;
					}
				},
				'navbarForm@app': {
					templateUrl: 'app/states/dashboard/estimated-toggle.html',
					controller:  'EstimatedToggleController as toggle'
				},
				'navigation@app': {
					templateUrl: 'app/states/dashboard/navigation.html',
					controller:  'NavigationController as nav'
				}
			},
			params:   {
				estimated: {
					value:  'false',
					squash: true
				}
			}
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.dashboard', [
		// Dependencies
		'ui.router',
		'angular-growl',
		'ui.bootstrap.buttons',

		// APIs
		'mpdDashboard.api.user',

		// Dependent States
		'mpdDashboard.states.app'
	] ) );
