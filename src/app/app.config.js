(function ( module ) {
	'use strict';

	// Enable html5mode
	module.config( function ( $locationProvider ) {
		$locationProvider.html5Mode( true );
	} );

	// Initialize Application Settings
	module.config( function ( SettingsProvider ) {
		SettingsProvider.setConfig( window.MPDDashboard.config );
	} );

	// Configure Debug Logging
	module.config( function ( $logProvider, SettingsProvider ) {
		$logProvider.debugEnabled( SettingsProvider.isDevelopment() );
	} );

	// Configure Cas Authenticated Api
	module.config( function ( casAuthenticatedApiProvider ) {
		casAuthenticatedApiProvider
			.setAuthenticationApiBaseUrl( 'http://localhost:3001/v1' )
			.setTicketUrl( 'http://localhost/~brian/dev-mpd-dashboard/refresh.php' )
			.addManagedApi( 'http://localhost:3000/v1' );
	} );

	// Configure Growl
	module.config( function ( growlProvider ) {
		growlProvider.globalPosition( 'top-right' );
		growlProvider.globalDisableCountDown( true );
		growlProvider.globalTimeToLive( {success: 10000, error: -1, warning: -1, info: 10000} );
	} );

	module.run( function ( $log, $rootScope ) {
		$rootScope.$on( '$stateChangeError', function ( event, toState, toParams, fromState, fromParams, error ) {
			$log.error( '$stateChangeError:', toState, toParams, error );
		} );
	} );

})( angular.module( 'mpdDashboard' ) );
