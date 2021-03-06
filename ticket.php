<?php namespace GlobalTechnology\MPDDashboard {
	require_once( dirname( __FILE__ ) . '/vendor/autoload.php' );
	$wrapper = ApplicationWrapper::singleton();
	$wrapper->casClient->checkAuthentication();
	$ticket = $wrapper->getAPIServiceTicket( $_REQUEST[ 'service' ] );
	if ( $ticket !== false ) {
		header( 'Content-type: application/json; charset=utf-8', true, 200 );
		echo json_encode( array( 'data' => array(
			'type' => 'service_ticket',
			'id'   => $ticket
		) ) );
		exit( 0 );
	}
	header( 'Content-Type: text/html; charset=UTF-8', true, 400 );
	echo '<html><head><title>Refresh Ticket Error</title></head><body></body></html>';
	exit();
}
