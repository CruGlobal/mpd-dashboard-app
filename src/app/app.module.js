(function () {
	'use strict';

	angular.module( 'mpdDashboard', [
		// Dependencies
		'gettext',
		'ui.router',
		'angular-growl',
		'cas-authenticated-api',
		'mpdDashboard.settingsService',
//		'mpdCalculator.api.measurements',

		// States
		'mpdDashboard.states.dashboard.countries'
	] );
})();
