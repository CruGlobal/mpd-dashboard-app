<?php namespace GlobalTechnology\MPDDashboard {
	require_once( dirname( __FILE__ ) . '/../vendor/autoload.php' );
	$wrapper = ApplicationWrapper::singleton();
	$wrapper->authenticate();
	?>
	<!doctype html>
	<html ng-app="mpdDashboard">
	<head>
		<meta charset="UTF-8">
		<base href="<?php echo rtrim( $wrapper->url->getPath(), '/' ) . '/'; ?>" />
		<title></title>

		<!-- Application Configuration -->
		<script type="application/javascript">
			var MPDDashboard = window.MPDDashboard = window.MPDDashboard || {};
			MPDDashboard.config = <?php echo $wrapper->appConfig(); ?>;
		</script>

		<!-- 3rd Party JavaScript and CSS -->
		<script type="application/javascript" src="bower_components/jquery/dist/jquery.js"></script>
		<script type="application/javascript" src="bower_components/angular-loader/angular-loader.js"></script>
		<script type="application/javascript" src="bower_components/angular/angular.js"></script>
		<script type="application/javascript" src="bower_components/angular-resource/angular-resource.js"></script>
		<script type="application/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
		<script type="application/javascript" src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
		<script type="application/javascript" src="bower_components/angular-google-chart/ng-google-chart.js"></script>
		<script type="application/javascript" src="bower_components/moment/moment.js"></script>
		<script type="application/javascript" src="bower_components/underscore/underscore.js"></script>
		<link rel="stylesheet" href="bower_components/bootswatch/superhero/bootstrap.css" />

		<!-- Application CSS -->
		<!-- build:styles -->
		<link rel="stylesheet" href="app/css/app.css" />
		<!-- endbuild -->

		<!-- build:library -->
		<script type="application/javascript" src="bower_components/angular-gettext/dist/angular-gettext.js"></script>
		<script type="application/javascript" src="bower_components/angular-growl-v2/build/angular-growl.js"></script>
		<script type="application/javascript" src="bower_components/lscache/lscache.js"></script>
		<script type="application/javascript" src="bower_components/angular-cas-auth-api/dist/cas-auth-api.js"></script>
		<!-- endbuild -->
	</head>
	<body>
	<div growl></div>
	<div ui-view>
		<!-- Placeholder while Angular app loads -->
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">MPD Dashboard</a>
				</div>
			</div>
		</nav>
	</div>
	<div class="loading">
		<div class="sk-fading-circle">
			<div class="sk-circle1 sk-circle"></div>
			<div class="sk-circle2 sk-circle"></div>
			<div class="sk-circle3 sk-circle"></div>
			<div class="sk-circle4 sk-circle"></div>
			<div class="sk-circle5 sk-circle"></div>
			<div class="sk-circle6 sk-circle"></div>
			<div class="sk-circle7 sk-circle"></div>
			<div class="sk-circle8 sk-circle"></div>
			<div class="sk-circle9 sk-circle"></div>
			<div class="sk-circle10 sk-circle"></div>
			<div class="sk-circle11 sk-circle"></div>
			<div class="sk-circle12 sk-circle"></div>
		</div>
	</div>

	<!-- Application JavaScript -->
	<!-- build:application -->
	<script type="application/javascript" src="app/app.module.js"></script>

	<script type="application/javascript" src="app/states/app.state.js"></script>
	<script type="application/javascript" src="app/states/dashboard/dashboard.state.js"></script>
	<script type="application/javascript" src="app/states/dashboard/countries/countries.state.js"></script>
	<script type="application/javascript" src="app/states/dashboard/country/country.state.js"></script>
	<script type="application/javascript" src="app/states/dashboard/staff-account/staff-account.state.js"></script>

	<script type="application/javascript" src="app/api/countries.service.js"></script>
	<script type="application/javascript" src="app/api/staff.service.js"></script>
	<script type="application/javascript" src="app/api/user.service.js"></script>
	<script type="application/javascript" src="app/app.config.js"></script>
	<script type="application/javascript" src="app/components/googlechart/region-click.directive.js"></script>
	<script type="application/javascript" src="app/components/percent.filter.js"></script>
	<script type="application/javascript" src="app/settings/settings.service.js"></script>
	<script type="application/javascript" src="app/states/dashboard/estimated-toggle.controller.js"></script>
	<script type="application/javascript" src="app/states/dashboard/countries/countries.controller.js"></script>
	<script type="application/javascript" src="app/states/dashboard/country/country.controller.js"></script>
	<script type="application/javascript" src="app/states/dashboard/navigation.controller.js"></script>
	<script type="application/javascript" src="app/states/dashboard/staff-account/staff-account.controller.js"></script>
	<script type="application/javascript" src="app/states/unauthorized/unauthorized.state.js"></script>
	<!-- endbuild -->

	</body>
	</html>
<?php }
