<?php

	Class Usuario{
		
		function login($email,$senha){
			global $pdo;
			
			// include_once('../../conection/conn.php');
			include_once('conection/conn.php');

			// $sql = "SELECT id, nome, telefone, email, cnpj, excluido FROM colaborador WHERE (email= :email OR telefone= :email ) AND senha= :senha"	;
			$sql = "SELECT id, nome, telefone, email, cnpj, excluido FROM colaborador WHERE email= :email AND senha= :senha"	;
			/*
				echo $email .'</br>' ;
				echo $senha .'</br>' ;
				echo $sql .'</br>' ;
			*/

			$sth = $pdo->prepare($sql);
			$sth->bindValue('email'   ,$email);
			$sth->bindValue('senha'   ,$senha);
			$sth->execute();
			/*
				echo( $sth->rowCount() ) ;
				echo( '</br>' ) ;
			*/
			if( $sth->rowCount()>0 ){
				$dados = $sth->fetch() ;
				
				session_destroy();
				session_start();
				$_SESSION['IdUser']    = $dados['id'] ;
				$_SESSION['NameUser']  = $dados['nome'] ;
				$_SESSION['emailUser'] = $dados['email'] ;
				$_SESSION['foneUser']  = $dados['telefone'] ;
				$_SESSION['CNPJUser']  = $dados['cnpj'] ;
				
				$colaborador_id = $dados['id'] ;
				$sql_ins = "INSERT INTO acesso (colaborador_id, entrada) values (:colaborador_id , now() )"	;
				$sth2 = $pdo->prepare($sql_ins);
				$sth2->bindValue('colaborador_id'   ,$colaborador_id);
				$sth2->execute();
				// echo( $dados['id'] ) ;
				return true;
			}else{
				return false;
			}
		}

		function logout($UserID){
			// echo ($UserID .'       c</br>') ;
			global $pdo;
			
			//include_once('../../conection/conn.php');
			include_once('../../conection/conn.php');
			$sth2 = $pdo->prepare( "UPDATE acesso SET saida = now() WHERE colaborador_id = :UserID AND saida IS null" );
			if ($sth2) {
				$sth2->bindValue( 'UserID' , $UserID );
				$sth2->execute();
				echo "Record Updated:";
				echo $sth2->affected_rows;
			}else{
				echo $connection->error;
			}
			return null ;
		}
	}

?>