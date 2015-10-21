/**
 GET /ministry?min_code=(min_code)&estimated=(true|false)

 Returns mpd data for the selected ministry, HTTP 403 otherwise

 Response:
 {
 	name: "Russian Federation",
 	iso_code: "RU",
 	min_code: "RUS",
 	mpd_health: [
 		[{user{name:}, {user}, {user, ...}], // >100% Raised
 		[...], // 80-100% Raised
 		[...], // 50-80% Raised
 		[...], // <50% Raised
 		[...] // No Budget
 	],
	average_support: [
		['2014-10', 1.01, 0.21 ], // [ Period, Avg Support, Staff with more than 90% ]
		[ ... ],
		[ ... ],
		[ ... ]
	]
 }
 */

(function ( module ) {
	'use strict';
	module.factory( 'Ministry', function ( $log ) {
		return {
			get: function () {
				return {
					name:            'Australia',
					min_code:        'AUS',
					iso_code:        'AU',
					mpd_health:      [
						[
							{name: "Alijsal Stonspi", person_id: 1234},
							{name: "Deveoma Dugbea", person_id: 1234},
							{name: "Dwayleo Balemaul", person_id: 1234},
							{name: "Cardev Dangstr", person_id: 1234},
							{name: "Katlshay Fulrydi", person_id: 1234}
						],
						[
							{name: "Keira Stone", person_id: 1234},
							{name: "Hannah Matthews", person_id: 1234},
							{name: "Holly Hill", person_id: 1234},
							{name: "Samara Massey", person_id: 1234},
							{name: "Susan Casey", person_id: 1234},
							{name: "Mckinley Powers", person_id: 1234},
							{name: "Kiara Lester", person_id: 1234},
							{name: "Parker Oliver", person_id: 1234}
						],
						[
							{name: "Keljust Chehol", person_id: 1234},
							{name: "Chardav Stasum", person_id: 1234},
							{name: "Jeagian Blaalwa", person_id: 1234},
							{name: "Vancbra Marhow", person_id: 1234},
							{name: "Teralle Stinpink", person_id: 1234},
							{name: "Skylnic Delport", person_id: 1234},
							{name: "Vincjay Heyeurwi", person_id: 1234},
							{name: "Keladan Rowshe", person_id: 1234},
							{name: "Gaibry Postbaxe", person_id: 1234},
							{name: "Jamazach Sebbac", person_id: 1234},
							{name: "Babyvic Spomaul", person_id: 1234},
							{name: "Alerei Wichhea", person_id: 1234},
							{name: "Lawrwarr Hostsha", person_id: 1234},
							{name: "Jaibyr Saytoy", person_id: 1234},
							{name: "Mariway Sattgra", person_id: 1234},
							{name: "Caelall Thorwya", person_id: 1234},
							{name: "Reginig Eademort", person_id: 1234},
							{name: "Nestdarr Atwestil", person_id: 1234},
							{name: "Abbmaya Forlscaf", person_id: 1234},
							{name: "Abriclar Gaythai", person_id: 1234},
							{name: "Jewejose Harmfar", person_id: 1234},
							{name: "Krisabag Dorwoo", person_id: 1234},
							{name: "Mardal Wandlan", person_id: 1234},
							{name: "Karcha Allscox", person_id: 1234},
							{name: "Desttris Farshr", person_id: 1234},
							{name: "Dendev Coolara", person_id: 1234},
							{name: "Liam Adams", person_id: 1234},
							{name: "Jake Davies", person_id: 1234},
							{name: "Kai John", person_id: 1234},
							{name: "Cameron Watson", person_id: 1234},
							{name: "Theo Atkinson", person_id: 1234},
							{name: "Anthony Holcomb", person_id: 1234},
							{name: "Deangelo Skinner", person_id: 1234},
							{name: "Vance Bush", person_id: 1234},
							{name: "Freddy Doyle", person_id: 1234},
							{name: "Patrick Paul", person_id: 1234},
							{name: "Melissa Bates", person_id: 1234},
							{name: "Charlotte Mccarthy", person_id: 1234}
						],
						[
							{name: "Ramoeuge Chanew", person_id: 1234},
							{name: "Brezach Beared", person_id: 1234},
							{name: "Garrlay Marcar", person_id: 1234},
							{name: "Perrtre Brithaym", person_id: 1234},
							{name: "Quinayd Cathoxto", person_id: 1234},
							{name: "Maxroy Frithig", person_id: 1234},
							{name: "Nicodas Jennbach", person_id: 1234},
							{name: "Kendtav Levewad", person_id: 1234},
							{name: "Darrmar Sumnpan", person_id: 1234},
							{name: "Omaedw Ricksymp", person_id: 1234},
							{name: "Kiarsari Windpost", person_id: 1234},
							{name: "Karmica Wilhass", person_id: 1234},
							{name: "Shelayl Chammou", person_id: 1234},
							{name: "Abagdesi Parnfree", person_id: 1234},
							{name: "Eilkyl Wheedm", person_id: 1234},
							{name: "Alekae Kearhax", person_id: 1234},
							{name: "Rylejada Lakiping", person_id: 1234},
							{name: "Natlexi Larmoldr", person_id: 1234},
							{name: "Ashhal Parrham", person_id: 1234},
							{name: "Jamydian Holdor", person_id: 1234},
							{name: "Tessamel Sandhaym", person_id: 1234},
							{name: "Karjayl Widdwatk", person_id: 1234},
							{name: "Annjani Shofarr", person_id: 1234},
							{name: "Dasikay Benngre", person_id: 1234},
							{name: "Ajamac Golscho", person_id: 1234},
							{name: "Tialin Daftbar", person_id: 1234},
							{name: "Ariabi Norcumb", person_id: 1234},
							{name: "Chrison Peakeel", person_id: 1234},
							{name: "Skytatu Taring", person_id: 1234}
						],
						[
							{name: "Dexzach Clafair", person_id: 1234},
							{name: "Bryram Blunhol", person_id: 1234},
							{name: "Samiglen Hendall", person_id: 1234},
							{name: "Bencla Lathgue", person_id: 1234},
							{name: "Donant Curwag", person_id: 1234},
							{name: "Sagecae Liptfitz", person_id: 1234},
							{name: "Zanmarq Hentred", person_id: 1234},
							{name: "Karlger Earenc", person_id: 1234},
							{name: "Quinway Linbir", person_id: 1234},
							{name: "Neihou Turrpet", person_id: 1234}
						]
					],
					average_support: [
						//['Period', 'Average Support Level', 'Staff with more than 90%'],
						['2014-10', 1.15, 0.46],
						['2014-11', 0.95, 0.40],
						['2014-12', 1.04, 0.36],
						['2015-01', 1.10, 0.47],
						['2015-02', 1.05, 0.53],
						['2015-03', 1.09, 0.46],
						['2015-04', 1.12, 0.45],
						['2015-05', 1.35, 0.55],
						['2015-06', 1.28, 0.52],
						['2015-07', 1.27, 0.41],
						['2015-08', 3.05, 0.54],
						['2015-09', 1.20, 0.52],
						['2015-10', 1.15, 0.46]
					]
				};
			}
		}
	} );

})( angular.module( 'mpdDashboard.api.ministry', [] ) );
