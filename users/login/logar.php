<?php
	//logar.php

	error_reporting(0);
	ini_set(“display_errors”, 0 );

	session_start();
	unset( $_SESSION['IdUser'] );

	$userUser = $_POST['UserUsername'];
	$userPass = $_POST['UserPassword'];

	/*
	echo( $userUser . '</br>');
	echo( $userPass . '</br>');
	exit;
	*/

	if( empty($userUser) || empty($userPass) ){
		header('location: ../../index.php' ) ;
	}


	require 'Usuario.class.php' ;
	$usuario = new Usuario();

	if( ! $usuario->login($userUser,$userPass) ){
		/*
		echo( $_SESSION['IdUser']    . '</br>');
		echo( $_SESSION['NameUser']  . '</br>');
		echo( $_SESSION['emailUser'] . '</br>');
		echo( $_SESSION['foneUser']  . '</br>');
		echo( $_SESSION['CNPJUser']  . '</br>');
		//exit;
		*/
	}
	header('location: ../../index.php' ) ;
	//exit;

?>