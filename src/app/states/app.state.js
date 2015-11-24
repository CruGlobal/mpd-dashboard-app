(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/countries' );

		$stateProvider.state( 'app', {
			abstract:    true,
			url:         '/',
			templateUrl: 'app/states/app.html'
			//controller:  'ApplicationController as app'
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.app', [
		// Dependencies
		'ui.router',
		'angular-growl',
		'ui.bootstrap.collapse',
		'ui.bootstrap.dropdown',

		// States
		'mpdDashboard.states.unauthorized'
	] ) );
