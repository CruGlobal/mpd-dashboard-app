(function ( module ) {
	'use strict';

	module.factory( 'User', function ( $log, $resource, Settings ) {
		var returnDataAttr = function ( response ) {
			response.data.permissions.countries = angular.copy(response.data.permissions.country);
			return response.data.data;
		};

		return $resource( Settings.api.mpdDashboard( '/user' ), {}, {
			get: {method: 'GET', interceptor: {response: returnDataAttr}}
		} );
	} );

})( angular.module( 'mpdDashboard.api.user', ['ngResource'] ) );
