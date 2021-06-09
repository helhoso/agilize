<?php

/*
    How call : http://solucaofinal.com/agilize'


	Hostinger - https://www.hostinger.com/
	https://play.google.com/apps/publish/signup/
	http://explore.appinventor.mit.edu/app-building-guides#
	
	Client ID: 27350780
	Email: hflb01@gmail.com
	First Name: HELIO BARBOSA
	Last Name: BARBOSA
	Country: Brazil
	Address: Rua Doutor Sebastião Amaral , Paulista, PE, 53433010
	Phone: + 55 - 81983048278
	Status: Active
	Member since: 09/15/2018


	Usuario.. hflb01@gmail.com
	Senha.... 0407Deia

	Painel de controle
	https://cpanel.hostinger.com/databases/phpmyadmin/aid/31053120

	/home/u130683007/domains/solucaofinal.com/public_html/agilize

	banco: id6951306_industry
	usuario: id6951306_admin
	senha: admin12345@
*/	

  
  error_reporting(0);
  ini_set(“display_errors”, 0 );
  

  // require 'conection/conn.php' ;

		echo( ' >> ' . $_SESSION['IdUser'] . '</br>');
		echo( ' >> ' . $_SESSION['NameUser'] . '</br>');
  exit;
  if( isset($_SESSION['IdUser']) && !empty($_SESSION['IdUser']) ):

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>AGILIZE CALL CENTER</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

</head>
<body style="height:1500px">


<nav class="navbar navbar-expand-lg navbar-light bg-light"><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/agilize/">AGILIZE CALL CENTER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Abrir tarefa</a>
        </li>
        <li class="nav-item">
          <!-- a class="nav-link" href="#">Sair</a -->
        </li>
      </ul>

        <div class="form-inline my-2 my-lg-0" >
           <a class="nav-link" href="users/login/logout.php">Sair</a>
        </div>

    </div>



  </div>
</nav>


</body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</html>

<?php
 else: header('location: users/login/index.html' ); endif;
?>
