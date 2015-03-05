<?php

	require ('MailChimp-php-api.php');

	$email = $_REQUEST['email'];

	$MailChimp = new \Drewm\MailChimp('f35bf81d5ba570a28bc58f80794ef06c-us10');
	$result = $MailChimp->call('lists/subscribe', array(
					'id'                => 'dab1a508f3',
					'email'             => array('email'=>$email),
					'double_optin'      => false,
					'update_existing'   => false,
					'replace_interests' => false,
					'send_welcome'      => false,
				));
	return $result;



?>