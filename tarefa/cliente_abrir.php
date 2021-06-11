
<?php

	$UserId = $_GET['pId'] ;
	$CliDoc = $_GET['pDoc'] ;
	if( empty($UserId) ){
		exit;
	}

	global $pdo;
	include_once('../conection/conn.php');

	$sql = "SELECT c.id, c.nome, c.telefone, c.email, c.tipodocumento, c.numerodocumento FROM cliente c 
	WHERE 1=1 AND c.telefone= :id_c1 OR c.email= :id_c2 OR numerodocumento= :id_c3 AND c.excluido=2" ;


	$sql= 'SELECT 
			c.id, 
			c.nome, 
			c.telefone, 
			c.email, 
			c.tipodocumento, 
			c.numerodocumento,
			u.id,
			u.nome,
			e.colaborador_id
	FROM cliente c, colaborador u, colaborador_empresa e
	WHERE 1=1 
	AND (
		c.telefone= :id_c1 
		OR c.email= :id_c2 
		OR numerodocumento= :id_c3 
		)
	AND u.id= :id_c4
	AND e.colaborador_id=u.id
	AND c.excluido=2
	AND u.excluido=2' ;
	
	//echo( $sql .'</br>');
	//echo( $UserId .' = UserId</br>');
	$sth = $pdo->prepare($sql);
	$sth->bindValue('id_c1'   ,$CliDoc);
	$sth->bindValue('id_c2'   ,$CliDoc);
	$sth->bindValue('id_c3'   ,$CliDoc);
	$sth->bindValue('id_c4'   ,$UserId);
	$sth->execute();
	//echo( $sth->rowCount() .' = rowCount</br>'); 
	if( $sth->rowCount()>0 ){
		$dados = $sth->fetch();
		echo( 'Cliente..: ' . $dados['nome'] ) ;
		echo( '</br>Telefone: ' . $dados['telefone'] ) ;
		echo("<fieldset>");
		echo("<b><strong><legend>Solução </strong></b>");		
		echo( '</br><textarea class="form-control" name= id="solucao"> </textarea>' ) ;
		echo("</fieldset>");

		echo( '</br>') ;
		echo( '
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="solved" id="flexRadioDefault1">
			  <label class="form-check-label" for="flexRadioDefault1">
				Totalmente resolvido
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="solved" id="flexRadioDefault2" >
			  <label class="form-check-label" for="flexRadioDefault2">
				Parcialmente resolvido
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="solved" id="flexRadioDefault3" >
			  <label class="form-check-label" for="flexRadioDefault2">
				Encaminhado
			  </label>
			</div>
		');		
		
	}else{
		echo("Não localizado!") ;
	}
?>

</br>
<input type='button' value='Registrar' onclick='myRegistro()'/>
