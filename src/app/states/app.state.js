(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/countries' );

		$stateProvider.state( 'app', {
			abstract:    true,
			url:         '/',
			resolve:     {
				/*
				 'session':    function ( $log, Session ) {
				 return Session.getSession();
				 },
				 'user':       function ( $log, $q, session ) {
				 var deferred = $q.defer();
				 deferred.resolve( session.user );
				 return deferred.promise;
				 },
				 'ministries': function ( $log, session, Ministries ) {
				 return Ministries.whq().$promise;
				 }
				 */
			},
			templateUrl: 'app/states/app.html',
			controller:  'ApplicationController as app'
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.app', [
		// Dependencies
		'ui.router',
		'angular-growl',
		'ui.bootstrap.collapse',
		'ui.bootstrap.dropdown'
	] ) );
