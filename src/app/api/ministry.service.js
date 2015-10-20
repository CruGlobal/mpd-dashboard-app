/**
 GET /ministry?min_code=(min_code)&estimated=(true|false)

 Returns mpd data for the selected ministry, HTTP 403 otherwise

 Response:
 {
 	country: "Russian Federation",
 	iso_code: "RU",
 	min_code: "RUS",
 	mpd_health: [
 		[...], // No Budget
 		[...], // <50% Raised
 		[...], // 50-80% Raised
 		[...], // 80-100% Raised
 		[{user}, {user}, {user, ...}] // >100% Raised
 	],
	average_support: [
		['2014-10', 1.01, 0.21 ], // [ Period, Avg Support, Staff with more than 90% ]
		[ ... ],
		[ ... ],
		[ ... ]
	]
 }
 */

/**

 google.load("visualization", "1", { packages: ["corechart"] });

 google.setOnLoadCallback(drawChart);

 $(function () {
        $('.dropdown-toggle').dropdown();
    });

 function drawChart() {


        var data2 = google.visualization.arrayToDataTable([
 ['Support Level', 'Percentage Raised'], ['>100% Raised', 35],['80-100% Raised', 18],['50-80% Raised', 19],['<50% Raised', 5],['No Budget', 0]
        ]);

        var options2 = {
            title: 'Staff MPD Health',
            pieHole: 0.4, reverseCategories: false,
            chartArea: { left: 40, top: 20, width: "120%", height: "100%" },
            slices: [{ color: 'green' },{ color: '#ff9b00' }, { color: '#ff5f08' }, { color: 'red' }, { color: 'grey', offset: 0.1 }]
};

var chart2 = new google.visualization.PieChart(document.getElementById('donutchart'));


function selectHandler() {
	var selectedItem = chart2.getSelection()[0];
	if (selectedItem) {
		var section = data2.getValue(selectedItem.row, 0);
		$('.listDetail').hide();
		if (section.indexOf('<50%') > -1) $('#d_lessthan50').show();

		if (section.indexOf('50-80%') > -1) $('#d_low').show();
		// if (section.indexOf('80-90%') > -1) $('#d_medium').show();
		if (section.indexOf('80-100%') > -1) $('#d_high').show();
		if (section.indexOf('>100%') > -1) $('#d_full').show();
		if (section.indexOf('No Budget') > -1) $('#d_none').show();

	}
}
google.visualization.events.addListener(chart2, 'select', selectHandler);

chart2.draw(data2, options2);

if(true){
	var data = google.visualization.arrayToDataTable([
		['Period', 'Average Support Level', 'Staff with more than 90%'],
		['Oct 14', 1.01, 0.21 ], ['Nov 14', 1.27, 0.33 ], ['Dec 14', 0.77, 0.15 ], ['Jan 15', 3.00, 0.44 ], ['Feb 15', 1.33, 0.18 ], ['Mar 15', 2.25, 0.32 ], ['Apr 15', 8.12, 0.21 ], ['May 15', 0.91, 0.27 ], ['Jun 15', 1.97, 0.29 ], ['Jul 15', 0.81, 0.19 ], ['Aug 15', 0.00, 0.00 ], ['Sep 15', 0.95, 0.25 ], ['Oct 15', 1.07, 0.32 ],
	]);
	var formatter = new google.visualization.NumberFormat({
		pattern: '#%',
		fractionDigits: 2
	});
	formatter.format(data, 1);
	formatter.format(data, 2);
	var options = {
		title: 'Average Support Progress', vAxis: { format: '#,###%' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);

}
else{
	$('#chart_div').hide();
}



}
 */


(function ( module ) {
	'use strict';
	module.factory( 'Ministry', function ( $log ) {
		return {
			get: function () {
				return {};
			}
		}
	} );

})( angular.module( 'mpdDashboard.api.ministry', [] ) );
