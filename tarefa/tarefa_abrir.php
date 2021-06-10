
<?php

	$UserId = $_GET['pId'] ;
	if( empty($UserId) ){
		exit;
	}

	global $pdo;
	include_once('../conection/conn.php');

	$sql = "SELECT ce.empresa_id, e.razaosocial, c.nome FROM colaborador_empresa ce, empresa e, colaborador c WHERE 1=1 AND e.id=ce.empresa_id AND ce.colaborador_id= :id_c " ;
	//echo( $sql .'</br>');
	//echo( $UserId .' = UserId</br>');
	$sth = $pdo->prepare($sql);
	$sth->bindValue('id_c'   ,$UserId);
	$sth->execute();
	//echo( $sth->rowCount() .' = rowCount</br>'); 
	if( $sth->rowCount()>0 ){
		?>
		  <div class="form-group">
			<label for="exampleFormControlSelect1">Selecione a Empresa</label>
			<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="empress" id="empress" onchange="myEmpresas()">
			<option value='0' selected> </option>
		<?php
		foreach( $sth->fetchAll() as  $dados ){
			//echo( $dados[0] . ' | ' . $dados[1] .'</br>');
			echo( '<option value='.$dados[0].'>'.$dados[1].'</option>' );
		}
		?>
			</select>
		  </div>
		<?php
	}else{
		header('location: index.php' ) ;
	}
?>


