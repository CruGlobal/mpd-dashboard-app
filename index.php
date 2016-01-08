<?php namespace GlobalTechnology\MPDDashboard {
	require_once( dirname( __FILE__ ) . '/vendor/autoload.php' );
	$wrapper = ApplicationWrapper::singleton();
	$wrapper->authenticate();
	$min = Config::get( 'application.directory', 'dist' ) === 'dist' ? '.min' : '';
	?>
	<!doctype html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title></title>

		<!-- Application Configuration -->
		<script type="application/javascript">
			var MPDDashboard = window.MPDDashboard = window.MPDDashboard || {};
			MPDDashboard.config = <?php echo $wrapper->appConfig(); ?>;
		</script>

		<style>
			body, html {
				margin: 0; padding: 0; height: 100%; overflow: hidden;
			}

			#MPDDashboardApplication {
				position:absolute; left: 0; right: 0; bottom: 0; top: 0; height: 100%;
			}
		</style>

		<!--<script type="application/javascript" src="<? echo $wrapper->appDir( "wrapper{$min}.js" ); ?>"></script>-->
	</head>
	<body style="margin: 0;">
	<iframe id="MPDDashboardApplication" src="<?php echo $wrapper->appDir( 'index.html' ); ?>" style="width: 100%; border-width: 0;"></iframe>
	<!--<script type="application/javascript">iFrameResize( {minHeight: 500}, document.getElementById( 'MPDDashboardApplication' ) );</script>-->
	</body>
	</html>
<?php }
