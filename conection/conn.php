<?php

	$host      = 'localhost';
	$user      = 'u130683007_agilize';
	$password  = 'U130683007u';
	$banco     = 'u130683007_agilize' ;

try{
	$pdo = new PDO( 'mysql:dbname=' . $banco . ';host=' . $host , $user , $password );
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
}catch(PDOException $e){
	echo( "ERRO: " . $e->getMessage() );
	exit;
}
?>