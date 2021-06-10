<?php

	$UserId = $_GET['p1'] ;
	$EmprId = $_GET['p2'] ;
	//echo( $UserId .'</br>' );
	//echo( $EmprId .'</br>' );
	//exit;
	if( empty($UserId) ){
		exit;
	}
	header('location: tarefa/script_abrir.php?pId=' .$UserId . '&pEm=' .$EmprId ) ;


?>