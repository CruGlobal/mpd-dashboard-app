(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'ministry', {
			parent:  'dashboard',
			url:     'ministry/{min_code}',
			resolve: {
				'ministry':         function ( $stateParams, Ministry ) {
					return Ministry.get();
				},
				'mpdHealthData':    function ( ministry ) {
					return [
						['Support Level', 'Percentage Raised'],
						['> 100%', ministry.mpd_health[4].length],
						['80 - 100%', ministry.mpd_health[3].length],
						['50 - 80%', ministry.mpd_health[2].length],
						['< 50%', ministry.mpd_health[1].length],
						['No Budget', ministry.mpd_health[0].length]
					];
				},
				'supportTrendData': function ( $window, $q, googleChartApiPromise, ministry ) {
					var deferred = $q.defer();
					googleChartApiPromise.then( function () {
						var average_support = _.map( ministry.average_support, function ( data ) {
							data[0] = new Date( data[0] );
							return data;
						} );
						var data = $window.google.visualization.arrayToDataTable(
							[['Period', 'Average Support Level', 'Staff with more than 90%']].concat( average_support )
						);

						var dateFormat = new $window.google.visualization.DateFormat( {
							pattern: 'MMM y'
						} );
						dateFormat.format( data, 0 );

						var percentFormat = new $window.google.visualization.NumberFormat( {
							pattern:        '#,###%',
							fractionDigits: 2
						} );
						percentFormat.format( data, 1 );
						percentFormat.format( data, 2 );

						deferred.resolve( data );
					}, function () {
						deferred.reject();
					} );
					return deferred.promise;
				}
			},
			views:   {
				'@app':      {
					templateUrl: 'app/states/dashboard/ministry/ministry.html',
					controller:  'MinistryController as ministry'
				},
				'title@app': {
					template:   '<span>{{name}}</span>',
					controller: function ( $scope, ministry ) {
						$scope.name = ministry.name;
					}
				}
			}
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.dashboard.ministry', [
		// Dependencies
		'ui.router',
		'angular-growl',
		'googlechart',
		'mpdDashboard.components.percent',

		// API
		'mpdDashboard.api.ministry',

		// Dependent States
		'mpdDashboard.states.dashboard'
	] ) );
