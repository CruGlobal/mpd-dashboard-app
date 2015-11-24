(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'staffAccount', {
			parent:  'dashboard',
			url:     'staff/{id}',
			resolve: {
				'account':             function ( $stateParams, Staff, estimated, permissions ) {
					return Staff.get( estimated.estimated ? {
						id:        $stateParams.id,
						estimated: true
					} : {id: $stateParams.id} ).$promise;
				},
				'budgetTrendData':     function ( $window, $q, googleChartApiPromise, account ) {
					var deferred = $q.defer();
					googleChartApiPromise.then( function () {
						var budget_trend = _.map( account.attributes.budget_trend, function ( data ) {
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
					return [['Income Type', 'Amount']].concat( account.attributes.income );
				}
			},
			views:   {
				'@app': {
					templateUrl: 'app/states/dashboard/staff-account/staff-account.html',
					controller:  'StaffAccountController as staffAccountCtrl'
				}
			}
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.dashboard.staffAccount', [
		// Dependencies
		'ui.router',
		'angular-growl',
		'googlechart',
		'mpdDashboard.components.percent',

		// API
		'mpdDashboard.api.staff',

		// Dependent States
		'mpdDashboard.states.dashboard.country',
		'mpdDashboard.states.unauthorized'
	] ) );
