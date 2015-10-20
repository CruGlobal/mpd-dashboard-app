(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'ministry', {
			parent:  'dashboard',
			url:     'ministry/{min_code}',
			resolve: {},
			views:   {
				'@app': {
					templateUrl: 'app/states/dashboard/ministry/ministry.html',
					controller:  'MinistryController as ministry'
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
		//'mpdDashboard.api.ministry',

		// Dependent States
		'mpdDashboard.states.dashboard'
	] ) );
