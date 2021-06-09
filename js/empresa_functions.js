<script>
function empresa_Function(p1,p2) {
	//alert(p1);
  
  if(p1=='id'){
	var p1 = document.getElementById(p1);
	var p2= p1.value ; 
	if( ! isNumber(p2) ){
		document.getElementById('div1').innerHTML= "Id invalido!" ;
		doLimpar() ;
		document.getElementById(p1).focus();
	}
	url = "empresa_manter_.php?id="+p1.value +"&proximo=0" ;;
	document.getElementById('div1').innerHTML = url ;
	$.get(url, function(resposta){
		document.getElementById('div1').innerHTML = resposta ;
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Empresa não encontrada!" ;
			//document.getElementById('div1').innerHTML= resposta  ;
		}else{
			document.getElementById("id").value         = fileds_all[0];
			document.getElementById("cnpj").value       = fileds_all[1];
			document.getElementById('ie').value         = fileds_all[2];
			document.getElementById('razao').value      = fileds_all[3] ;
			document.getElementById('endereco').value   = fileds_all[4];
			document.getElementById('bairro').value     = fileds_all[5];
			document.getElementById('cidade').value     = fileds_all[6];
			document.getElementById('uf').value         = fileds_all[7];
			document.getElementById('cep').value        = fileds_all[8];
			document.getElementById('telefone').value   = fileds_all[9];
			document.getElementById('email').value      = fileds_all[10];
			document.getElementById('licenca').value    = fileds_all[11];
			document.getElementById('vencimento').value = fileds_all[12];
			if(fileds_all[13]=='1'){
				document.getElementById('excluido').value   = 'S' ;
			}else{
				document.getElementById('excluido').value   = 'N';
			}
			document.getElementById('div1').innerHTML= "" ;
			// for (i in fileds_all) alert(fileds_all[i]);
		}
	});
  }
  
  if(p1=='anterior'){
	//alert('<');
	var p1 = document.getElementById(p1);
	url = "empresa_manter_.php?id="+document.getElementById('id').value+"&proximo=1" ;
	$.get(url, function(resposta){
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Empresa não encontrada!" ;
		}else{
			document.getElementById("id").value         = fileds_all[0];
			document.getElementById("cnpj").value       = fileds_all[1];
			document.getElementById('ie').value         = fileds_all[2];
			document.getElementById('razao').value      = fileds_all[3];
			document.getElementById('endereco').value   = fileds_all[4];
			document.getElementById('bairro').value     = fileds_all[5];
			document.getElementById('cidade').value     = fileds_all[6];
			document.getElementById('uf').value         = fileds_all[7];
			document.getElementById('cep').value        = fileds_all[8];
			document.getElementById('telefone').value   = fileds_all[9];
			document.getElementById('email').value      = fileds_all[10];
			document.getElementById('licenca').value    = fileds_all[11];
			document.getElementById('vencimento').value = fileds_all[12];
			if(fileds_all[13]=='1'){
				document.getElementById('excluido').value   = 'S' ;
			}else{
				document.getElementById('excluido').value   = 'N';
			}
			document.getElementById('div1').innerHTML= "" ;
			// for (i in fileds_all) alert(fileds_all[i]);
		}
	});
  } 
  if(p1=='posterior'){
	//alert('>');
	var p1 = document.getElementById(p1);
	url = "empresa_manter_.php?id="+document.getElementById('id').value+"&proximo=2" ;
	$.get(url, function(resposta){
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Empresa não encontrada!" ;
		}else{
			document.getElementById("id").value         = fileds_all[0];
			document.getElementById("cnpj").value       = fileds_all[1];
			document.getElementById('ie').value         = fileds_all[2];
			document.getElementById('razao').value      = fileds_all[3];
			document.getElementById('endereco').value   = fileds_all[4];
			document.getElementById('bairro').value     = fileds_all[5];
			document.getElementById('cidade').value     = fileds_all[6];
			document.getElementById('uf').value         = fileds_all[7];
			document.getElementById('cep').value        = fileds_all[8];
			document.getElementById('telefone').value   = fileds_all[9];
			document.getElementById('email').value      = fileds_all[10];
			document.getElementById('licenca').value    = fileds_all[11];
			document.getElementById('vencimento').value = fileds_all[12];
			if(fileds_all[13]=='1'){
				document.getElementById('excluido').value   = 'S' ;
			}else{
				document.getElementById('excluido').value   = 'N';
			}
			document.getElementById('div1').innerHTML= "" ;
			// for (i in fileds_all) alert(fileds_all[i]);
		}
	});
  }

  if(p1=='primeiro'){
	//alert('>');
	var p1 = document.getElementById(p1);
	url = "empresa_manter_.php?id="+document.getElementById('id').value+"&proximo=3" ;
	$.get(url, function(resposta){
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Empresa não encontrada!" ;
		}else{
			document.getElementById("id").value         = fileds_all[0];
			document.getElementById("cnpj").value       = fileds_all[1];
			document.getElementById('ie').value         = fileds_all[2];
			document.getElementById('razao').value      = fileds_all[3];
			document.getElementById('endereco').value   = fileds_all[4];
			document.getElementById('bairro').value     = fileds_all[5];
			document.getElementById('cidade').value     = fileds_all[6];
			document.getElementById('uf').value         = fileds_all[7];
			document.getElementById('cep').value        = fileds_all[8];
			document.getElementById('telefone').value   = fileds_all[9];
			document.getElementById('email').value      = fileds_all[10];
			document.getElementById('licenca').value    = fileds_all[11];
			document.getElementById('vencimento').value = fileds_all[12];
			if(fileds_all[13]=='1'){
				document.getElementById('excluido').value   = 'S' ;
			}else{
				document.getElementById('excluido').value   = 'N';
			}
			document.getElementById('div1').innerHTML= "" ;
			// for (i in fileds_all) alert(fileds_all[i]);
		}
	});
  }
  if(p1=='ultimo'){
	//alert('>');
	var p1 = document.getElementById(p1);
	url = "empresa_manter_.php?id="+document.getElementById('id').value+"&proximo=4" ;
	$.get(url, function(resposta){
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Empresa não encontrada!" ;
		}else{
			document.getElementById("id").value         = fileds_all[0];
			document.getElementById("cnpj").value       = fileds_all[1];
			document.getElementById('ie').value         = fileds_all[2];
			document.getElementById('razao').value      = fileds_all[3];
			document.getElementById('endereco').value   = fileds_all[4];
			document.getElementById('bairro').value     = fileds_all[5];
			document.getElementById('cidade').value     = fileds_all[6];
			document.getElementById('uf').value         = fileds_all[7];
			document.getElementById('cep').value        = fileds_all[8];
			document.getElementById('telefone').value   = fileds_all[9];
			document.getElementById('email').value      = fileds_all[10];
			document.getElementById('licenca').value    = fileds_all[11];
			document.getElementById('vencimento').value = fileds_all[12];
			if(fileds_all[13]=='1'){
				document.getElementById('excluido').value   = 'S' ;
			}else{
				document.getElementById('excluido').value   = 'N';
			}
			document.getElementById('div1').innerHTML= "" ;
			// for (i in fileds_all) alert(fileds_all[i]);
		}
	});
  }





  if(p1=='razao' || p1=='uf' || p1=='excluido'){
	var p1 = document.getElementById(p1);
	p1.value = p1.value.toUpperCase();
  }
  if(p1=='cep'){
	var p1value = document.getElementById(p1).value;
	if( p1value!=''){
		if( !pesquisacep(p1value) ){
			document.getElementById('div1').innerHTML = 'CEP [' + p1value + '] não é valido!';
			document.getElementById(p1).value = '';
			limpa_formulario_cep();
			document.getElementById(p1).focus();
		}
	}
  }
  if(p1=='vencimento'){
	var p1value = document.getElementById(p1).value;
	if( ((p1value<1) || (p1value>31)) && (p1value != '') ){
		document.getElementById('div1').innerHTML = 'Dia ' + p1value + ' não é valido!';
		document.getElementById(p1).value = '';
		document.getElementById(p1).focus();
	}
  }
  if( p1=='email' ) {
	var p1value = document.getElementById(p1).value;
	if( p1value!=''){
		if( !validacaoEmail(document.getElementById(p1)) ){
			document.getElementById(p1).value = '';
			document.getElementById(p1).focus();
			document.getElementById('div1').innerHTML = 'E-mail invalido!';
		}
	  }
  }
  if( p1=='empresa_incluir' ) {
	var1 = document.getElementById("id").value ;
	//alert( var1 );
	var2 = document.getElementById("cnpj").value ;
	//alert( var2 );
	var3 = document.getElementById("ie").value ;
	//alert( var3 );
	var4 = document.getElementById("razao").value ;
	//alert( var4 );
	var5 = document.getElementById("cep").value ;
	//alert( var5 );
	var6 = document.getElementById("endereco").value ;
	//alert( var6 );
	var7 = document.getElementById("bairro").value ;
	//alert( var7 );
	var8 = document.getElementById("cidade").value ;
	//alert( var8 );
	var9 = document.getElementById("uf").value ;
	//alert( var9 );
	var10= document.getElementById("telefone").value ;
	//alert( var10);
	var11= document.getElementById("email").value ;
	//alert( var11);
	var12= document.getElementById("licenca").value ;
	//alert( var12);
	var13= document.getElementById("vencimento").value ;
	//alert( var13);
	if(document.getElementById("excluido").value == 'S'){
		var14= 1;
	}else{
		var14= 2;
	}

	//document.getElementById('div1').innerHTML= p2 ;
	//return;
	
	/*
	if( !validarDados() ){
		return ;
	}
	*/
	if(var1==""){
		var0 = "0" ;
	}else{
		var0 = "S" ;
	}
	url = "empresa_manter_.php?id="+var1+"&proximo="+var0
	+"&cnpj="+var2
	+"&ie="+var3
	+"&razao="+var4
	+"&cep="+var5
	+"&endereco="+var6
	+"&bairro="+var7
	+"&cidade="+var8
	+"&uf="+var9
	+"&telefone="+var10
	+"&email="+var11
	+"&licenca="+var12
	+"&vencimento="+var13 
	+"&excluido="+var14 ;
	//alert( url );
	// document.getElementById('div1').innerHTML = url ;
	$.get(url, function(resposta){
		if(resposta < 0){
			// alert("Erro!");
			document.getElementById('div1').innerHTML= "Erro! Empresa não foi cadastrada. Verifique se o cadastro já existe..." ;
		}else{
			if(var1>0){
				document.getElementById('div1').innerHTML= "Empresa atualizada! Id:" + var1 ;
			}else{
				// inclusão
				document.getElementById('div1').innerHTML= "Empresa incluida! Id:" + resposta ;
			}
		}
	});
  }
}

function validarDados(){
	Erros   = '' ;
	retorne = true ;
	if( !validarCNPJ( document.getElementById("cnpj").value ) ){
		Erros = Erros + 'CNPJ invalido! </br>' ;
		retorne = false ;
	}
	var0 = document.getElementById("ie").value ;
	if( var0.length <= 0){
		Erros = Erros + 'Inscrição Estadual ficou em branco! </br>' ;
	}
	var0 = document.getElementById("razao").value ;
	if( var0.length <= 0){
		Erros = Erros + 'Razão Social não pode ficar em branco! </br>' ;
		retorne = false ;
	}
	var0 = document.getElementById("email").value ;
	// alert(var0 ) ;
	if( var0.length > 4 ){
		//if( !validacaoEmail( var0 ){
			Erros = Erros + 'E-mail não é um e-mail valido! </br>' ;
		//}
	}
	var0 = document.getElementById("excluido").value ;
	// alert(var0 ) ;
	if( var0 != 'S' &&  var0 != 'N' ){
		//if( !validacaoEmail( var0 ){
			Erros = Erros + 'Excluido só pode ser: S/N </br>' ;
		//}
		retorne = false ;
	}
	document.getElementById('div1').innerHTML = Erros ;
	return retorne ;
}
function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') return false;

    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
}



function doLimpar(){
	//
	document.getElementById('empresa_form').reset();
	document.getElementById('div1').innerHTML='';
}

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
function validacaoEmail(field) {
	//alert(field.value);
	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

	if ((usuario.length >=1) &&
		(dominio.length >=3) &&
		(usuario.search("@")==-1) &&
		(dominio.search("@")==-1) &&
		(usuario.search(" ")==-1) &&
		(dominio.search(" ")==-1) &&
		(dominio.search(".")!=-1) &&
		(dominio.indexOf(".") >=1)&&
		(dominio.lastIndexOf(".") < dominio.length - 1)) {
		//document.getElementById("msgemail").innerHTML="E-mail válido";
		// alert("E-mail valido");
		//document.getElementById('div1').innerHTML = 'E-mail valido!';
		return true;
	}
	else{
		//document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
		//alert("E-mail invalido");
		//document.getElementById('div1').innerHTML = 'E-mail invalido!';
		return false;
	}
}
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
function limpa_formulario_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('endereco').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            //document.getElementById('ibge').value=("");
			document.getElementById('cep').value = '';
}
// ------------------------------------------------
function meu_callback(conteudo) {
	if (!("erro" in conteudo)) {
		//Atualiza os campos com os valores.
		document.getElementById('endereco').value=(conteudo.logradouro);
		document.getElementById('bairro').value=(conteudo.bairro);
		document.getElementById('cidade').value=(conteudo.localidade);
		document.getElementById('uf').value=(conteudo.uf);
		//document.getElementById('ibge').value=(conteudo.ibge);
	} //end if.
	else {
		//CEP não Encontrado.
		limpa_formulario_cep();
		// alert("CEP não encontrado.");
		document.getElementById('div1').innerHTML = 'CEP não encontrado!';
	}
}
// ------------------------------------------------	
function pesquisacep(valor) {

	//Nova variável "cep" somente com dígitos.
	var cep = valor.replace(/\D/g, '');

	//Verifica se campo cep possui valor informado.
	if (cep != "") {

		//Expressão regular para validar o CEP.
		var validacep = /^[0-9]{8}$/;

		//Valida o formato do CEP.
		if(validacep.test(cep)) {

			//Preenche os campos com "..." enquanto consulta webservice.
			document.getElementById('endereco').value="...";
			document.getElementById('bairro').value="...";
			document.getElementById('cidade').value="...";
			document.getElementById('uf').value="...";
			//document.getElementById('ibge').value="...";

			//Cria um elemento javascript.
			var script = document.createElement('script');

			//Sincroniza com o callback.
			script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

			//Insere script no documento e carrega o conteúdo.
			document.body.appendChild(script);
			return true;

		} //end if.
		else {
			//cep é inválido.
			//limpa_formulario_cep();
			//alert("Formato de CEP inválido.");
			//document.getElementById('div1').innerHTML = 'Formato de CEP inválido!';
			return false;
		}
	} //end if.
	else {
		//cep sem valor, limpa formulário.
		//limpa_formulario_cep();
		//document.getElementById('div1').innerHTML = 'Formato de CEP inválido!';
		return false;
	}
};
// ------------------------------------------------

function empresa_incluir(param1){
	document.getElementById('div1').innerHTML = "Aaaaaaaaaaaaaaaaaaaa" ;
	document.getElementById('id').focus();
}

function Xempresa_incluir(param1){
	// alert( param1.value ) ;
	//if(param1.value=="empresa_incluir")
	//{
		var1 = document.getElementById("id").value ;
		//alert( var1 );
		var2 = document.getElementById("cnpj").value ;
		//alert( var2 );
		var3 = document.getElementById("ie").value ;
		//alert( var3 );
		var4 = document.getElementById("razao").value ;
		//alert( var4 );
		var5 = document.getElementById("cep").value ;
		//alert( var5 );
		var6 = document.getElementById("endereco").value ;
		//alert( var6 );
		var7 = document.getElementById("bairro").value ;
		//alert( var7 );
		var8 = document.getElementById("cidade").value ;
		//alert( var8 );
		var9 = document.getElementById("uf").value ;
		//alert( var9 );
		var10= document.getElementById("telefone").value ;
		//alert( var10);
		var11= document.getElementById("email").value ;
		//alert( var11);
		var12= document.getElementById("licenca").value ;
		//alert( var12);
		var13= document.getElementById("vencimento").value ;
		//alert( var13);
		url = "empresa_manter_.php?id="+var1
		+"&cnpj="+var2
		+"&ie="+var3
		+"&razao="+var4
		+"&cep="+var5
		+"&endereco="+var6
		+"&bairro="+var7
		+"&cidade="+var8
		+"&uf="+var9
		+"&telefone="+var10
		+"&email="+var11
		+"&licenca="+var12
		+"&vencimento="+var13 ;
		//alert( url );
		document.getElementById('div1').innerHTML = "Aaaaaaaaaaaaaaaaaaaa" ;
		/*
		$.get(url, function(resposta){
			document.getElementById('div1').innerHTML= resposta ;
		});
		*/
	//}
}
function isNumber(n){ 
	// alert( /^-?[\d.]+(?:e-?\d+)?$/.test(n) ); 
	return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
} 

</script>