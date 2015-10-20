(function ( module ) {
	'use strict';

	function CountriesController( $log, $window, $state, countries, geodata ) {
		this.$state = $state;
		this.countries = countries;
		this.geochart = {
			type:    'GeoChart',
			data:    geodata,
			options: {
				// Fetch backgroundColor for containing div background
				backgroundColor: $window.jQuery( '.dashboard-well' ).css( 'backgroundColor' ),
				colorAxis:       {
					minValue: 50,
					maxValue: 100,
					colors:   [
						$window.jQuery( '.countries-geochart-colors .danger' ).css( 'backgroundColor' ),
						$window.jQuery( '.countries-geochart-colors .warning' ).css( 'backgroundColor' ),
						$window.jQuery( '.countries-geochart-colors .success' ).css( 'backgroundColor' )
					]
				}
			}
		};
	}

	CountriesController.prototype.onReady = function ( chartWrapper ) {
		// This fixes the issue initially, but any region mouseover/click break it.

		// Fixes issue with gradients and HTML <base> tag
		// @see https://github.com/google/google-visualization-issues/issues/2000
		jQuery( chartWrapper.getContainerId() ).find( 'svg' ).each( function () {
			jQuery( this ).find( "g" ).each( function () {
				if ( jQuery( this ).attr( 'clip-path' ) ) {
					if ( jQuery( this ).attr( 'clip-path' ).indexOf( 'url(#' ) == -1 ) {
						return;
					}
					jQuery( this ).attr( 'clip-path', 'url(' + document.location + jQuery( this ).attr( 'clip-path' ).substring( 4 ) )
				}
			} );
			jQuery( this ).find( "rect" ).each( function () {
				if ( jQuery( this ).attr( 'fill' ) ) {
					if ( jQuery( this ).attr( 'fill' ).indexOf( 'url(#' ) == -1 ) {
						return;
					}
					jQuery( this ).attr( 'fill', 'url(' + document.location + jQuery( this ).attr( 'fill' ).substring( 4 ) )
				}
			} );
		} );
	};

	CountriesController.prototype.onRegionClick = function ( region ) {
		var country = _.findWhere( this.countries, {iso_code: region} );
		if ( angular.isDefined( country ) ) {
			this.$state.go( 'ministry', {min_code: country.min_code} );
		}
	};

	module.controller( 'CountriesController', CountriesController );

})( angular.module( 'mpdDashboard.states.dashboard.countries' ) );
