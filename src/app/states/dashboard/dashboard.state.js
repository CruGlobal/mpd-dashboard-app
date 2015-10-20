(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'dashboard', {
			abstract: true,
			parent:   'app',
			url:      '?estimated'
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.dashboard', [
		// Dependencies
		'ui.router',
		'angular-growl',

		// Dependent States
		'mpdDashboard.states.app'
	] ) );
