
<?php

	$UserId = $_GET['pId'] ;
	$EmprId = $_GET['pEm'] ;
	if( empty($UserId) || empty($EmprId)){
		exit;
	}

	global $pdo;
	include_once('../conection/conn.php');

	$sql = "SELECT titulo, textopronto FROM scripts WHERE 1=1 AND empresa_id= :id_c " ;
	$sth = $pdo->prepare($sql);
	$sth->bindValue('id_c'   ,$EmprId);
	$sth->execute();
	//echo( $sth->rowCount() .' = rowCount</br>'); 
	if( $sth->rowCount()>0 ){
		?>
		  <div class="form-group">
			<label for="exampleFormControlSelect1">Selecione o Script</label>
			<select class="form-control" name="scriptss" id="scriptss" onchange="myScripts()">
			<option value='0' selected> </option>
		<?php
		foreach( $sth->fetchAll() as  $dados ){
			//echo( $dados[0] . ' | ' . $dados[1] .'</br>');
			echo( '<option value="'.$dados[1].'">' . $dados[0] . '</option>' );
		}
		?>
			</select>
		  </div>
		<?php
	}else{
		header('location: index.php' ) ;
	}
?>


