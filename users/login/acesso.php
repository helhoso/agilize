<?php
/*

    Colaborador.php
	Uusario: <e-mail>
	Senha..: <password>

	$str ='@u8Ma9//sys!#krk\&t'
	$encodeString = base64_encode($str);
	$str          = base64_decode($encodeString);


	$str ='@u8Ma9//sys!#krk\&t' ;
	echo($str . '</br>') ;
	$encodeString = base64_encode($str);
	echo($encodeString . '</br>') ;
	$str          = base64_decode($encodeString);
	echo($str . '</br>') ;

Links para teste:
http://localhost/rhbrasil/acesso.php?user=hahaha@gmail.com&pass=987lkj%C3%A7lkjsdfgfdsgds
http://localhost/rhbrasil/acesso.php

	error_reporting(0);
	ini_set(“display_errors”, 0 );

*/

	error_reporting(0);
	ini_set(“display_errors”, 0 );

	$user   = $_GET['Username'] ;	// e-mail
	$pass   = $_GET['UserPassword'] ;	// senha


	/*
	echo($user);
	echo(' </br> ' );
	echo($pass);
	echo(' </br> ' );
	return ;
	*/

	if( empty($user) && empty($pass) ){
	include('js/jquery.min.js') ;
	include('js/acesso_functions.js') ;
	session_start();
		echo ('<html>');
		echo ('<head>');
		echo ('</head>');
		echo ('<body onload="acesso_Iniciar()" >');
		echo ('	<font face="Courier"> ');
		echo ('	<form id="acesso_form">');
		echo ('');
		echo ('   <fieldset>');
		echo ('    <legend id="legenda">Acesso</legend>');
		echo ('');
		echo ('	<table cellspacing=10 bgcolor="DarkGray" width="100%">');
		echo ('	<tr>');
		echo ('	<td >');
		echo ('     <label>E-mail</label>');
		echo ('     <INPUT type="text" maxlength="60" size="40" id="user" value="helio1_barbosa@yahoo.com.br"/> </br>');
		echo ('	</td>');
		echo ('	<tr>');
		echo ('	<td>');
		echo ('     <label>Senha&nbsp</label>');
		echo ('     <INPUT type="password" maxlength="250" size="40" id="pass" value="Deia0407"/> </br>');
		echo ('	</td>');
		echo ('	</tr>');

		echo ('	<tr>');
		echo ('	<td colspan=2 style="text-align:center">');
		echo ('     <INPUT type="button" id="acess"  value="Acessar" onclick="acesso_Validar(this.id)" />');
		echo ('	</td>');
		echo ('	</tr>');

		echo ('	</table>');
		echo ('   </fieldset>');
		echo ('   </form>');
		echo ('   <fieldset>');
		echo ('    <legend id="legenda">Mensagens</legend>');
		echo ('    <div name="div1" id="div1">');
		echo ('    </div>');
		echo ('   </fieldset>');
		echo ('   </font> ');
		echo ('</body>');
		echo ('</html>') ;
	}else{
		
		include_once('documentacao/classes/Colaborador.php') ;
		
		// checar usuário
		$user   = $_GET['user'] ; // e-mail
		$pass   = $_GET['pass'] ; // senha

		$str ='u8Ma9fFg55' ;
		$str_encode  = base64_encode($str);
		$pass_encode = base64_encode($pass);
		if( ($str_encode==$pass_encode) && ($user=='@ADMIN@') ){
			echo ('MASTER') ;
		}else{
		   $colaborador = new Colaborador ;	
		   //echo ($user . ' </br> ' . $pass_encode . ' </br> ') ;
		   //echo( 'select Id from Colaborador where email="' . $user . '" and senha="' . $pass_encode . '" </br>'  );
		   echo $colaborador->executeSQLColaborador('select Id from Colaborador where email="' . $user . '" and senha="' . $pass_encode . '"' );
		   $empresa_id = $colaborador->getId();
		   $_SESSION['user_access'] = $user;
		   $_SESSION['company_id']  = $empresa_id ;
		}
	}
?>