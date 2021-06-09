<?php

	session_start();
	unset( $_SESSION['IdUser'] );
	session_destroy();
	header('location: /agilize/');

?>