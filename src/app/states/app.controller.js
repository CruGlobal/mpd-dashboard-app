(function ( module ) {
	'use strict';

	function ApplicationController( $log, $state ) {
		this.$state = $state;

		this.navigation = {
			countries:      true,
			staff_accounts: [{
				country:   'Argentina',
				min_code:  'ARG',
				person_id: '1234'
			}, {
				country:   'Egypt',
				min_code:  'EGY',
				person_id: '1234'
			}, {
				country:   'Belarus',
				min_code:  'BEA',
				person_id: '1234'
			}]
		};
	}

	module.controller( 'ApplicationController', ApplicationController );

})( angular.module( 'mpdDashboard.states.app' ) );
