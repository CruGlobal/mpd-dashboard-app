(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'countries', {
			parent:  'dashboard',
			url:     'countries',
			resolve: {
				'countries': function ( $log, Countries ) {
					return Countries.get();
				},
				'geodata':   function ( $log, countries ) {
					var data       = _.reject( countries, function ( obj ) {
							return angular.isUndefined( obj.iso_code ) || _.isNull( obj.iso_code ) || obj.iso_code === '';
						} ),
						iso_codes  = ['Country'].concat( _.pluck( data, 'iso_code' ) ),
						mpd_levels = ['MPD Level'].concat( _.map( _.pluck( data, 'mpd_level' ), function ( num ) {
							return num * 100
						} ) );
					return _.zip( iso_codes, mpd_levels );
				}
			},
			views:   {
				'@app': {
					templateUrl: 'app/states/dashboard/countries/countries.html',
					controller:  'CountriesController as countries'
				}
			}
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.dashboard.countries', [
		// Dependencies
		'ui.router',
		'angular-growl',
		'googlechart',
		'mpdDashboard.components.googlechart.regionClick',
		'mpdDashboard.components.percent',

		// API
		'mpdDashboard.api.countries',

		// Dependent States
		'mpdDashboard.states.dashboard',
		'mpdDashboard.states.dashboard.ministry'
	] ) );
