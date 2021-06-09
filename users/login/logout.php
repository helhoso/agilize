<?php

	session_start();
	$UserID = $_SESSION['IdUser'] ;

	unset( $_SESSION['IdUser'] );
	session_destroy();

	require 'Usuario.class.php' ;
	$usuario = new Usuario();

	// fechar registro de acesso do usuario
	$usuario->logout($UserID) ;

	header('location: /agilize/');

?>