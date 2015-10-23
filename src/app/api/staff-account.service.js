/**
 GET /account?min_code=(min_code)&person_id=(person_id)&estimated=(true|false)

 Returns mpd data for the selected staff account at the given ministry

 Response:
 {
 	name: "Babyvic Spomaul",
 	person_id: "uuid",
 	min_code: "RUS",
 	mpd_analysis: 0.8, // red/yellow/green traffic light, possibly number between 0 and 1?
 	average_support:[
 		0.964, // Year
 		0.991, // Quarter
 		1.116 // Month
 	],
 	income: [
 		// ['Income Type', 'Amount'],
		['Local Income', 6672.95],
		['Foreign Income', 0.00],
		['Subsidy', 0.00]
 	],
	budget_trend: [
		// [ 'Month', 'Balance', 'Income', 'To Raise', 'Expenses', 'Expense Budget' ]
		['2015-04', 31866.54, 3076.00, 0.00, 5188.74, 0.00 ],
		[ ... ],
		[ ... ],
		[ ... ]
	]
 }
 */

(function ( module ) {
	'use strict';
	module.factory( 'StaffAccount', function ( $log ) {
		return {
			get: function () {
				return {
					name:            "Babyvic Spomaul",
					person_id:       "uuid",
					min_code:        "RUS",
					mpd_analysis:    0.8,
					average_support: [
						{period: 'Year', value: 0.964},
						{period: 'Quarter', value: 0.991},
						{period: 'Month', value: 1.116}
					],
					income:          [
						// ['Income Type', 'Amount'],
						['Local Income', 6672.95],
						['Foreign Income', 0.00],
						['Subsidy', 0.00]
					],
					budget_trend:    [
						// [ 'Month', 'Balance', 'Income', 'To Raise', 'Expenses', 'Expense Budget' ]
						['2014-10', 32117.75, 7730.67, 0.00, 6412.96, 0.00],
						['2014-11', 32647.86, 6869.67, 0.00, 6339.56, 0.00],
						['2014-12', 32369.33, 5987.67, 0.00, 6266.20, 0.00],
						['2015-01', 33381.38, 7383.67, 0.00, 6371.62, 0.00],
						['2015-02', 33915.33, 6969.67, 0.00, 6435.72, 0.00],
						['2015-03', 33979.28, 6487.67, 0.00, 6423.72, 0.00],
						['2015-04', 31866.54, 3076.00, 0.00, 5188.74, 0.00],
						['2015-05', 27862.70, 6806.67, 0.00, 6287.98, 0.00],
						['2015-06', 30067.86, 8752.67, 0.00, 6547.51, 0.00],
						['2015-07', 29921.32, 6249.67, 0.00, 6396.21, 0.00],
						['2015-08', 31104.68, 7693.67, 0.00, 6510.31, 0.00],
						['2015-09', 30800.04, 6067.67, 0.00, 6372.31, 0.00]
					]
				}
			}
		}
	} );

})( angular.module( 'mpdDashboard.api.staffAccount', [] ) );
