
<?php

	$UserId = $_GET['pId'] ;
	if( empty($UserId) ){
		exit;
	}

	global $pdo;
	include_once('../conection/conn.php');

	$sql = "SELECT c.nome FROM colaborador c WHERE 1=1 AND c.id= :id_c " ;
	$sth = $pdo->prepare($sql);
	$sth->bindValue('id_c'   ,$UserId);
	$sth->execute();
	//echo( $sth->rowCount() .' = rowCount</br>'); 
	if( $sth->rowCount()>0 ){
		$dados = $sth->fetch() ;
		echo( $dados[0].', preencha os dados do Cliente ... ' );
		echo( '</br>Cliente (Fone/e-Mail/NºContrato): <input type="text" id="clie_acess" onblur="myGetCliente(this.value)"> </input> </br>');
	}else{
		header('location: index.php' ) ;
	}
?>


