/**
 GET /countries?estimated=(false|true)

 Fetch a list of countries (ministries technically) and corresponding mpd status using either actual or estimated budgets.
 If estimated is missing, assume false.

 Response:
 [
 {
	 name: "Chile",     // Country Name
	 min_code: "CHL"       // Ministry Code
	 iso_code: "CL",       // ISO 3166 alpha-2
	 mpd_level: 0.72,        // MPD Level used in geochart
	 staff_with_budget: 0, // Staff with a budget (%)
	 staff_raised: [       // % of Staff who have raised
		 0,    // Less than 50%
		 0.75, // 50 to 80%
		 0.25, // 80 to 100%
		 0     // Greater than 100%
	 ],
	 budget_spent: 1,      // % of Expense Budget Spent
	 raised_locally: 0.7   // Support raised locally (%)
 },
 ...
 ]
 */

(function ( module ) {
	'use strict';
	module.factory( 'Countries', function ( $log, $http ) {
		return {
			get: function () {
				return $http.get( 'http://localhost:3000/v1/countries' ).then( function () {
					return [
						{
							name:              'Albania',
							min_code:          'ALB',
							iso_code:          'AL',
							mpd_level:         0.96,
							staff_with_budget: 0,
							staff_raised:      [0, 0.16, 0.55, 0.29],
							budget_spent:      1,
							raised_locally:    0.16
						},
						{
							name:              'Argentina',
							min_code:          'ARG',
							iso_code:          'AR',
							mpd_level:         0.92,
							staff_with_budget: 0,
							staff_raised:      [0, 0, 0.8, 0.2],
							budget_spent:      1,
							raised_locally:    0.67
						},
						{
							name:              'Egypt',
							min_code:          'EGY',
							iso_code:          'EG',
							mpd_level:         0.48,
							staff_with_budget: 0.82,
							staff_raised:      [0.48, 0.36, 0.12, 0.04],
							budget_spent:      1.19,
							raised_locally:    0.28
						},
						{
							name:              'Croatia',
							min_code:          'CRO',
							iso_code:          'HR',
							mpd_level:         1,
							staff_with_budget: 0,
							staff_raised:      [0, 0, 0.54, 0.46],
							budget_spent:      1,
							raised_locally:    0.3
						},
						{
							name:              'East Asia Orient Area Office',
							min_code:          'AEO',
							iso_code:          '',
							mpd_level:         0,
							staff_with_budget: 0,
							staff_raised:      [1, 0, 0, 0],
							budget_spent:      1,
							raised_locally:    1
						},
						{
							name:              'Chile',
							min_code:          'CHL',
							iso_code:          'CL',
							mpd_level:         0.91,
							staff_with_budget: 0,
							staff_raised:      [0, 0, 1, 0],
							budget_spent:      1,
							raised_locally:    0.65
						},
						{
							name:              'Bulgaria',
							min_code:          'BUL',
							iso_code:          'BG',
							mpd_level:         0.93,
							staff_with_budget: 0,
							staff_raised:      [0.36, 0.29, 0.07, 0.29],
							budget_spent:      1,
							raised_locally:    0.39
						},
						{
							name:              'Bosnia and Herzegovina',
							min_code:          'BOS',
							iso_code:          'BA',
							mpd_level:         0.94,
							staff_with_budget: 0,
							staff_raised:      [0, 0, 1, 0],
							budget_spent:      1,
							raised_locally:    0
						},
						{
							name:              'Belarus',
							min_code:          'BEA',
							iso_code:          'BY',
							mpd_level:         0.71,
							staff_with_budget: 0,
							staff_raised:      [0, 1, 0, 0],
							budget_spent:      1,
							raised_locally:    0.2
						},
						{
							name:              'Bangladesh',
							min_code:          'BAN',
							iso_code:          'BD',
							mpd_level:         0.89,
							staff_with_budget: 0,
							staff_raised:      [0, 0.21, 0.66, 0.14],
							budget_spent:      1,
							raised_locally:    0.7
						},
						{
							name:              'Australia',
							min_code:          'AUS',
							iso_code:          'AU',
							mpd_level:         0.95,
							staff_with_budget: 0,
							staff_raised:      [0.02, 0.11, 0.66, 0.22],
							budget_spent:      1,
							raised_locally:    0.85
						}
					];
				}, function () {
				} );
			}
		}
	} );

})( angular.module( 'mpdDashboard.api.countries', [] ) );
