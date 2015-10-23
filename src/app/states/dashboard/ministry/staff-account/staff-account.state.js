(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'staffAccount', {
			parent:  'ministry',
			url:     '/{person_id}',
			resolve: {
				'account':             function ( $stateParams, ministry, StaffAccount ) {
					return StaffAccount.get();
				},
				'budgetTrendData':     function ( $window, $q, googleChartApiPromise, account ) {
					var deferred = $q.defer();
					googleChartApiPromise.then( function () {
						var budget_trend = _.map( account.budget_trend, function ( data ) {
							data[0] = new Date( data[0] );
							return data;
						} );
						var data = $window.google.visualization.arrayToDataTable(
							[['Month', 'Balance', 'Income', 'To Raise', 'Expenses', 'Expense Budget']].concat( budget_trend )
						);

						var dateFormat = new $window.google.visualization.DateFormat( {
							pattern: 'MMM y'
						} );
						dateFormat.format( data, 0 );

						deferred.resolve( data );
					}, function () {
						deferred.reject();
					} );
					return deferred.promise;
				},
				'incomeBreakdownData': function ( account ) {
					return [['Income Type', 'Amount']].concat( account.income );
				}
			},
			views:   {
				'@app': {
					templateUrl: 'app/states/dashboard/ministry/staff-account/staff-account.html',
					controller:  'StaffAccountController as staffAccountCtrl'
				}
			}
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.dashboard.ministry.staffAccount', [
		// Dependencies
		'ui.router',
		'angular-growl',
		'googlechart',
		'mpdDashboard.components.percent',

		// API
		'mpdDashboard.api.staffAccount',

		// Dependent States
		'mpdDashboard.states.dashboard.ministry'
	] ) );
