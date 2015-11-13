(function ( module ) {
	'use strict';

	module.config( function ( $stateProvider ) {

		$stateProvider.state( 'dashboard', {
			abstract: true,
			parent:   'app',
			url:      '?estimated',
			resolve:  {
				'estimated': function ( $stateParams ) {
					return {estimated: $stateParams.estimated === 'false' ? false : true};
				}
			},
			views:    {
				'footer@app':     {
					template:   '<div ng-if="estimated.estimated" class="alert alert-estimated">*Based on estimated budget - as no budget has been submitted.</div>',
					controller: function ( $scope, estimated ) {
						$scope.estimated = estimated;
					}
				},
				'navbarForm@app': {
					templateUrl: 'app/states/dashboard/estimated-toggle.html',
					controller:  'EstimatedToggleController as toggle'
				}
			},
			params:   {
				estimated: {
					value:  'false',
					squash: true
				}
			}
		} );
	} );

})( angular
	.module( 'mpdDashboard.states.dashboard', [
		// Dependencies
		'ui.router',
		'angular-growl',
		'ui.bootstrap.buttons',

		// Dependent States
		'mpdDashboard.states.app'
	] ) );
