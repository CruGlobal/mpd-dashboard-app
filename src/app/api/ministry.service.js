/**
 GET /ministry?min_code=(min_code)&estimated=(true|false)

 Returns mpd data for the selected ministry, HTTP 403 otherwise

 Response:
 {
 	name: "Russian Federation",
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
							"Alijsal Stonspi",
							"Deveoma Dugbea",
							"Dwayleo Balemaul",
							"Cardev Dangstr",
							"Katlshay Fulrydi"
						],
						[
							"Keira Stone",
							"Hannah Matthews",
							"Holly Hill",
							"Samara Massey",
							"Susan Casey",
							"Mckinley Powers",
							"Kiara Lester",
							"Parker Oliver"
						],
						[
							"Keljust Chehol",
							"Chardav Stasum",
							"Jeagian Blaalwa",
							"Vancbra Marhow",
							"Teralle Stinpink",
							"Skylnic Delport",
							"Vincjay Heyeurwi",
							"Keladan Rowshe",
							"Gaibry Postbaxe",
							"Jamazach Sebbac",
							"Babyvic Spomaul",
							"Alerei Wichhea",
							"Lawrwarr Hostsha",
							"Jaibyr Saytoy",
							"Mariway Sattgra",
							"Caelall Thorwya",
							"Reginig Eademort",
							"Nestdarr Atwestil",
							"Abbmaya Forlscaf",
							"Abriclar Gaythai",
							"Jewejose Harmfar",
							"Krisabag Dorwoo",
							"Mardal Wandlan",
							"Karcha Allscox",
							"Desttris Farshr",
							"Dendev Coolara",
							"Liam Adams",
							"Jake Davies",
							"Kai John",
							"Cameron Watson",
							"Theo Atkinson",
							"Anthony Holcomb",
							"Deangelo Skinner",
							"Vance Bush",
							"Freddy Doyle",
							"Patrick Paul",
							"Melissa Bates",
							"Charlotte Mccarthy"
						],
						[
							"Ramoeuge Chanew",
							"Brezach Beared",
							"Garrlay Marcar",
							"Perrtre Brithaym",
							"Quinayd Cathoxto",
							"Maxroy Frithig",
							"Nicodas Jennbach",
							"Kendtav Levewad",
							"Darrmar Sumnpan",
							"Omaedw Ricksymp",
							"Kiarsari Windpost",
							"Karmica Wilhass",
							"Shelayl Chammou",
							"Abagdesi Parnfree",
							"Eilkyl Wheedm",
							"Alekae Kearhax",
							"Rylejada Lakiping",
							"Natlexi Larmoldr",
							"Ashhal Parrham",
							"Jamydian Holdor",
							"Tessamel Sandhaym",
							"Karjayl Widdwatk",
							"Annjani Shofarr",
							"Dasikay Benngre",
							"Ajamac Golscho",
							"Tialin Daftbar",
							"Ariabi Norcumb",
							"Chrison Peakeel",
							"Skytatu Taring"
						],
						[
							"Dexzach Clafair",
							"Bryram Blunhol",
							"Samiglen Hendall",
							"Bencla Lathgue",
							"Donant Curwag",
							"Sagecae Liptfitz",
							"Zanmarq Hentred",
							"Karlger Earenc",
							"Quinway Linbir",
							"Neihou Turrpet"
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
