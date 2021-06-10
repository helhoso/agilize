<?php

	$UserId = $_GET['p1'] ;
	if( empty($UserId) ){
		exit;
	}
	header('location: tarefa/customer_abrir.php?pId=' .$UserId )


?>