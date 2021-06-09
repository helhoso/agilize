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
	
	* Checa se eh um "POST"
	* if POST
	*     faz o que o 'logar.php' faz hoje
	*     qdo terminar de faszer o q o logar.php faz hoje, redireciona o user para index.php
	* else
	* {
	* 	Checa session pra ver se usuario ta logado
	* 	if logado
	*      mostra menu
	* 	else  
	*      mostra tela de login
    *      o form da tela de login faz "POST" pra index.php
	* }
*/	

  
	error_reporting(0);
	ini_set(“display_errors”, 0 );

	session_start();
	/*
	echo( ' >> ' . $_SESSION['IdUser'] . '</br>');
	echo( ' >> ' . $_SESSION['NameUser'] . '</br>');
	*/
	//exit;
	if( empty($_SESSION['IdUser']) ):

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>AGILIZE CALL CENTER</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  
  <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">




</head>
<body style="height:1500px">
<div id="login" class="container">
  <div class="row-fluid">
    <div class="span4"> <!-- vai de 2 a 12  -->
      <div class="login well well-small">
        <div class="text-center">
          <img src="images/login.png" alt="logo"> 
        </div>
        <form action="users/login/logar.php" style="" class="login-form text-center" id="UserLoginForm" method="post" accept-charset="utf-8">
          <div class="control-group">
            <div class="input-prepend">
              <span class="add-on"><i class="icon-user"></i></span>
              <input name="UserUsername" required="required" placeholder="Username" maxlength="255" type="text" id="UserUsername"> 
            </div>
          </div>
          <div class="control-group">
            <div class="input-prepend">
              <span class="add-on"><i class="icon-lock"></i></span>
              <input name="UserPassword" required="required" placeholder="Password" type="password" id="UserPassword"> 
            </div>
          </div>
          <div class="control-group">
            <label id="remember-me">
              <input type="checkbox" name="data[User][remember_me]" value="1" id="UserRememberMe"> Lembra ?</label>
          </div>
          <div class="control-group">
            <input class="btn btn-primary btn-large" style="width:250px" type="submit" value="Entrar"> 
          </div>
        </form>
      </div><!--/.login-->
    </div><!--/.span12-->
  </div><!--/.row-fluid-->
</div><!--/.container-->
</body>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</html>
<?php
 // if( isset($_SESSION['IdUser']) && !empty($_SESSION['IdUser']) ):
 // else: header('location: users/login/index.html' ); endif;
 else: 
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
 // if( isset($_SESSION['IdUser']) && !empty($_SESSION['IdUser']) ):
 // else: header('location: users/login/index.html' ); endif;
	endif; 
?>
