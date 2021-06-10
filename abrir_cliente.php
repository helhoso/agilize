<?php

	$UserId = $_GET['p1'] ;
	$docCli = $_GET['p2'] ;
	if( empty($UserId) ){
		exit;
	}
	header('location: tarefa/cliente_abrir.php?pId=' .$UserId . '&pDoc='. $docCli)


?>