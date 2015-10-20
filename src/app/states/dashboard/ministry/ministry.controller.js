(function ( module ) {
	'use strict';

	function MinistryController( $log, $window, $state ) {
		this.$state = $state;
	}

	module.controller( 'MinistryController', MinistryController );

})( angular.module( 'mpdDashboard.states.dashboard.ministry' ) );
