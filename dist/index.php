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
		<script>function cdnizerLoad(u) {document.write('<scr'+'ipt src="'+encodeURIComponent(u)+'"></scr'+'ipt>');}</script><script type="application/javascript">
			var MPDDashboard = window.MPDDashboard = window.MPDDashboard || {};
			MPDDashboard.config = <?php echo $wrapper->appConfig(); ?>;
		</script>

		<!-- 3rd Party JavaScript and CSS -->
		<script type="application/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script><script>if(!(window.jQuery)) cdnizerLoad("bower_components/jquery/dist/jquery.js");</script>
		<script type="application/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.20/angular-loader.min.js"></script>
		<script type="application/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.20/angular.min.js"></script><script>if(!(window.angular)) cdnizerLoad("bower_components/angular/angular.js");</script>
		<script type="application/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.20/angular-resource.min.js"></script>
		<script type="application/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
		<script type="application/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.14.3/ui-bootstrap-tpls.min.js"></script>
		<script type="application/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-google-chart/0.1.0/ng-google-chart.min.js"></script>
		<script type="application/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
		<script type="application/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootswatch/3.3.5/superhero/bootstrap.min.css" />

		<!-- Application CSS -->
		<link rel="stylesheet" href="css/styles.min.css?rev=e5ebae2b">

		<script src="js/library.min.js?rev=1ff8f699"></script>
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
	<script src="js/app.min.js?rev=f4a75071"></script>
	<script src="js/templates.min.js?rev=04b53644"></script>

	</body>
	</html>
<?php }
