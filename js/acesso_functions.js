<script language="JavaScript" type="text/javascript">

function acesso_Iniciar(){
	//alert(1111);
	document.getElementById('user').focus();
	document.getElementById('div1').innerHTML="";
}

function acesso_Validar(p1) {
  //alert(p1);
  if(p1=='acess'){
	document.getElementById('div1').innerHTML="";
	var1 = document.getElementById("user").value ;
	var2 = document.getElementById("pass").value ;
	
	if(var1=="" || var2==""){
		return false ;
	}
	//alert(var0);
	url = "acesso.php?user="+var1+"&pass="+var2;
	//alert(url);
	//document.getElementById('div1').innerHTML= url ;
	//return ;
	$.get(url, function(resposta){
		var nPos = resposta.indexOf("[]Array");
		//alert(nPos) ;
		if( nPos<=0 ){
			document.getElementById('div1').innerHTML= "Acesso garantido!";
			return true ;
		}else{
			document.getElementById('div1').innerHTML= "Acesso negado! " ;
			return false ;
		}
	});
	//
  }

}


function selecionarUser(){
	//alert( document.getElementById("user").value ) ;
}

</script>
