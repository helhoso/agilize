<script language="JavaScript" type="text/javascript">
function colaborador_Iniciar(){
	popularSelecoes();
	document.getElementById('id').focus()
}
function colaborador_Function(p1) {
  if(p1=='id'){
	var p1 = document.getElementById(p1);
	var p2= p1.value ; 
	if( ! isNumber(p2) ){
		document.getElementById('div1').innerHTML= "Id invalido!" ;
		doLimpar() ;
		document.getElementById(p1).focus();
	}
	url = "colaborador_manter_.php?id=" + p1.value +"&proximo=0" ;
	$.get(url, function(resposta){
		document.getElementById('div1').innerHTML= resposta ;
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			// document.getElementById('div1').innerHTML= "Colaborador(a) não encontrado(a)!" ;
		}else{
			popularCampos(resposta);
		}
	});
  }
  
  if(p1=='anterior'){
	//alert('<');
	var p1 = document.getElementById(p1);
	url = "colaborador_manter_.php?id="+document.getElementById('id').value+"&proximo=1" ;
	$.get(url, function(resposta){
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Colaborador(a) não encontrado(a)!" ;
		}else{
			popularCampos(resposta);
		}
	});
  } 
  if(p1=='posterior'){
	//alert('>');
	var p1 = document.getElementById(p1);
	url = "colaborador_manter_.php?id="+document.getElementById('id').value+"&proximo=2" ;
	$.get(url, function(resposta){
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Colaborador(a) não encontrado(a)!" ;
		}else{
			popularCampos(resposta);
		}
	});
  }

  if(p1=='primeiro'){
	//alert('>');
	var p1 = document.getElementById(p1);
	url = "colaborador_manter_.php?id="+document.getElementById('id').value+"&proximo=3" ;
	$.get(url, function(resposta){
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Empresa não encontrada!" ;
		}else{
			popularCampos(resposta);
		}
	});
  }
  if(p1=='ultimo'){
	//alert('>');
	var p1 = document.getElementById(p1);
	url = "colaborador_manter_.php?id="+document.getElementById('id').value+"&proximo=4" ;
	$.get(url, function(resposta){
		fileds_all = resposta.split("|");
		if( fileds_all.length <= 1 ){
			document.getElementById('div1').innerHTML= "Empresa não encontrada!" ;
		}else{
			popularCampos(resposta);
		}
	});
  }



  if(p1=='nome' || p1=='uf' || p1=='excluido'){
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

  if( p1=='colaborador_incluir' ) {
	var1 = document.getElementById("id").value ;
	var2 = document.getElementById("empresa_id").value ;
	var3 = document.getElementById("grupo_id").value ;
	var4 = document.getElementById("tipo_folha").value ;
	var5 = document.getElementById("nome").value ;
	var6 = document.getElementById("cep").value ;
	var7 = document.getElementById("endereco").value ;
	var8 = document.getElementById("bairro").value ;
	var9 = document.getElementById("cidade").value ;
	var10= document.getElementById("uf").value ;
	var11= document.getElementById("nascimento").value ;
	var12= document.getElementById("sexo").value ;
	var13= document.getElementById("grau_instrucao").value ;
	var14= document.getElementById("nacionalidade").value ;
	var15= document.getElementById("estado_civil").value ;
	var16= document.getElementById("telefone").value ;
	var17= document.getElementById("email").value ;
	var18= document.getElementById("excluido").value ;

	if( !validarDados() ){
		return ;
	}
	
	if(var1==""){
		var0 = "0" ;
	}else{
		var0 = "S" ;
	}
	//alert(var0);
	url = "colaborador_manter_.php?id="+var1+"&proximo="+var0
	+"&empresa_id="+var2
	+"&grupo_id="+var3
	+"&tipo_folha="+var4
	+"&nome="+var5
	+"&cep="+var6
	+"&endereco="+var7
	+"&bairro="+var8
	+"&cidade="+var9
	+"&uf="+var10
	+"&nascimento="+var11
	+"&sexo_id="+var12
	+"&grau_instrucao="+var13
	+"&nacionalidade="+var14
	+"&estado_civil="+var15
	+"&telefone="+var16
	+"&email="+var17
	+"&excluido="+var18
	/*
	document.getElementById('div1').innerHTML= url ;
	return;
	*/
	$.get(url, function(resposta){
		if(resposta < 0){
			// alert("Erro!");
			document.getElementById('div1').innerHTML= "Erro! Colaborador não foi cadastrada. Verifique se o cadastro já existe..." ;
		}else{
			var ret1 = validarDados() ;
			// resposta = resposta +'</br>'+ret1 ;
			if(var1==""){
				document.getElementById('div1').innerHTML= "Colaborador(a) incluido(a)! Id:" + resposta +'</br>'+document.getElementById('div1').innerHTML ;
			}else{
				document.getElementById('div1').innerHTML= "Atualização realizada! Id:" + resposta +'</br>'+document.getElementById('div1').innerHTML ;
			}
			document.getElementById('id').value = resposta ;
		}
	});
	//document.getElementById('div1').innerHTML = "http://localhost/rhbrasil/"+url ;
  }

}

function validarDados(){
	Erros   = '' ;
	retorne = true ;

	var0 = document.getElementById("empresa_id").value ;
	if( var0.length <= 0){
		Erros = Erros + 'Empresa é obrigatório! </br>' ;
		retorne = false ;
	}

	var0 = document.getElementById("nome").value ;
	if( var0.length <= 0){
		Erros = Erros + 'Nome é obrigatório! </br>' ;
		retorne = false ;
	}
	var0 = document.getElementById("cep").value ;
	if( var0.length <= 0){
		Erros = Erros + 'CEP é obrigatório! </br>' ;
		retorne = false ;
	}
	var0 = document.getElementById("uf").value ;
	if( var0.length <= 0){
		Erros = Erros + 'UF é obrigatório! </br>' ;
		retorne = false ;
	}
	if( var0.length > 0){
		var str = "AC#AL#AP#AM#BA#CE#DF#ES#GO#MA#MT#MS#MG#PA#PB#PR#PE#PI#RJ#RN#RS#RO#RR#SC#SP#SE#TO";
		var n = str.indexOf(var0);
		if( n < 0){		
			Erros = Erros + 'UF invalida! </br>' ;
			retorne = false ;
		}
	}
	var0 = document.getElementById("nascimento").value ;
	// alert( var0.length );
	if( var0.length <=0 ){
		Erros = Erros + 'Data de nascimento é obrigatório! </br>' ;
		retorne = false ;
	}else{
		// alert( var0 );
		/* comparar a idade (Now() - Data) >= year(18) */
		// let parts = var0.split('/') ;
		let today = new Date() ;
		// diff /= (60 * 60 * 24);
		// diffyears = Math.abs(Math.round(diff/365.25));
		var nHoje = today.getFullYear();
		var nNasc = var0.substr(0,4);
		var nIdade= (nHoje-nNasc) ;
		//alert( nHoje-nNasc );
		if(nIdade<=0){
			Erros = Erros + 'Data de nascimentonão é obrigatório! </br>' ;
			retorne = false ;
		}
		if(nIdade>1 && nIdade<14){
			Erros = Erros + nIdade+ ' anos é uma idade imcompatível para trabalho! </br>' ;
			retorne = false ;
		}
		if(nIdade>14 && nIdade<18){
			Erros = Erros + 'Idade imcompatível para trabalho! </br>' ;
			Erros = Erros + '&nbsp&nbsp&nbsp&nbsp[ Só poderá trabalhar como menor aprendiz ]</br>' ;
		}
	}
	var0 = document.getElementById("sexo").value ;
	if( var0.length <= 0 ){
		Erros = Erros + 'Sexo é obrigatório! </br>' ;
		retorne = false ;
	}
	var0 = document.getElementById("grau_instrucao").value ;
	if( var0.length <= 0 ){
		Erros = Erros + 'Grau de instrução ficou em branco! </br>' ;
	}
	var0 = document.getElementById("nacionalidade").value ;
	if( var0.length <= 0 ){
		Erros = Erros + 'Nacionalidade ficou em branco! </br>' ;
	}
	var0 = document.getElementById("estado_civil").value ;
	if( var0.length <= 0 ){
		Erros = Erros + 'Estado civil é obrigatório! </br>' ;
		retorne = false ;
	}
	var0 = document.getElementById("telefone").value ;
	if( var0.length <= 0 ){
		Erros = Erros + 'Telefône ficou em branco! </br>' ;
	}
	var0 = document.getElementById("email").value ;
	if( var0.length <= 0 ){
		Erros = Erros + 'E-mail ficou em branco! </br>' ;
	}else{
		if( !validacaoEmail(var0) ){
			Erros = Erros + 'E-mail não é um e-mail valido! </br>' ;
			retorne = false ;
		}
	}
	var0 = document.getElementById("excluido").value ;
	if( var0.length <=0 ){
		document.getElementById("excluido").value = 2;
	}
	document.getElementById('div1').innerHTML = Erros ;
	if( !retorne ){
		alert("Verifique as mensagens no rodapé!");
	}
	return retorne ;
}

function popularCampos(resposta){
	// for (i in fileds_all) alert(fileds_all[i]);
	fileds_all = resposta.split("|");
	document.getElementById("id").value         	= fileds_all[0].trim();
	document.getElementById("empresa_id").value 	= fileds_all[1];
	document.getElementById('grupo_id').value   	= fileds_all[2];
	document.getElementById('tipo_folha').value 	= fileds_all[3];
	document.getElementById('nome').value       	= fileds_all[4];
	document.getElementById('cep').value        	= fileds_all[5];
	document.getElementById('endereco').value   	= fileds_all[6];
	document.getElementById('bairro').value     	= fileds_all[7];
	document.getElementById('cidade').value     	= fileds_all[8];
	document.getElementById('uf').value         	= fileds_all[9];
	document.getElementById('nascimento').value 	= fileds_all[10];
	document.getElementById('sexo').value       	= fileds_all[11];
	document.getElementById('grau_instrucao').value = fileds_all[12];
	document.getElementById('nacionalidade').value  = fileds_all[13];
	document.getElementById('estado_civil').value   = fileds_all[14];
	document.getElementById('telefone').value   	= fileds_all[15];
	document.getElementById('email').value      	= fileds_all[16];
	document.getElementById('excluido').value   	= fileds_all[17];
	// selecionar o grau de instrução correto
	var x_grau_instrucao = document.getElementById("grau_instrucao");
	//alert( fileds_all[12]);
    for(i=0; i < x_grau_instrucao.length ; i++){
		if( i == fileds_all[12] ){
			x_grau_instrucao.value         = i ;
			x_grau_instrucao.selectedIndex = i ;
			x_grau_instrucao.selected      = true ;
			//alert(i);
			//document.getElementById('div1').innerHTML = x_grau_instrucao.value ;
		}
	}
	document.getElementById('div1').innerHTML       = "" ;
}

function doLimpar(){
	//
	document.getElementById('colaborador_form').reset();
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


function popularSelecoes(){
	p1 = document.getElementById('id').value ;
	url = "colaborador_manter_.php?id=" + p1 + "&proximo=G" ;
    $.get(url, function(data,status) {
		//document.getElementById('div1').innerHTML = data;
        var ar = json_decode(data) ;
		//var a2 = ar[0] ;
        // alert( ar.length ) ;
        // alert( ar[1] ) ;
		//document.getElementById('div1').innerHTML = ar ;
        for (i=0; i < ar.length; i++){
          var a = ar[i] ;
          //alert( a[0] + "   " + a[1] ) ;
		  if(a[0]=='tipo_folha'){
			var o = new Option( a[1] , a[2] ) ;
			o.selected=false;
			$("#tipo_folha").append(o);
		  }	
		  if(a[0]=='sexo'){
			var o = new Option( a[1] , a[2] ) ;
			o.selected=false;
			$("#sexo").append(o);
		  }	
		  if(a[0]=='estado_civil'){
			var o = new Option( a[1] , a[2] ) ;
			o.selected=false;
			$("#estado_civil").append(o);
		  }	
		  if(a[0]=='grau_instrucao'){
			var o = new Option( a[1] , a[2] ) ; //1.Texto  2.Value
			o.selected=false;
			$("#grau_instrucao").append(o);
		  }	
          //alert( a[1] ) ;
        }
    });
	return;
}

function selecionarTipoFolha(){
	//alert( document.getElementById("tipo_folha").value ) ;
}
function selecionarSexo(){
	//alert( document.getElementById("sexo").value ) ;
}
function selecionarGrauInstrucao(){
	//alert( document.getElementById("grau_instrucao").value ) ;
}
function selecionarEstadoCivil(){
	//alert( document.getElementById("estado_civil").value ) ;
}
function selecionarExcluido(){
	//alert( document.getElementById("excluido").value ) ;
}


// ----------------- json_decode //
function json_decode(str_json) {
  //       discuss at: http://phpjs.org/functions/json_decode/
  //      original by: Public Domain (http://www.json.org/json2.js)
  // reimplemented by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      improved by: T.J. Leahy
  //      improved by: Michael White
  //        example 1: json_decode('[ 1 ]');
  //        returns 1: [1]

  /*
    http://www.JSON.org/json2.js
    2008-11-19
    Public Domain.
    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
    See http://www.JSON.org/js.html
  */

  var json = this.window.JSON;
  if (typeof json === 'object' && typeof json.parse === 'function') {
    try {
      return json.parse(str_json);
    } catch (err) {
      if (!(err instanceof SyntaxError)) {
        throw new Error('Unexpected error type in json_decode()');
      }
      this.php_js = this.php_js || {};
      this.php_js.last_error_json = 4; // usable by json_last_error()
      return null;
    }
  }

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var j;
  var text = str_json;

  // Parsing happens in four stages. In the first stage, we replace certain
  // Unicode characters with escape sequences. JavaScript handles many characters
  // incorrectly, either silently deleting them, or treating them as line endings.
  cx.lastIndex = 0;
  if (cx.test(text)) {
    text = text.replace(cx, function(a) {
      return '\\u' + ('0000' + a.charCodeAt(0)
        .toString(16))
        .slice(-4);
    });
  }

  // In the second stage, we run the text against regular expressions that look
  // for non-JSON patterns. We are especially concerned with '()' and 'new'
  // because they can cause invocation, and '=' because it can cause mutation.
  // But just to be safe, we want to reject all unexpected forms.
  // We split the second stage into 4 regexp operations in order to work around
  // crippling inefficiencies in IE's and Safari's regexp engines. First we
  // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
  // replace all simple value tokens with ']' characters. Third, we delete all
  // open brackets that follow a colon or comma or that begin the text. Finally,
  // we look to see that the remaining characters are only whitespace or ']' or
  // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
  if ((/^[\],:{}\s]*$/)
    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

    // In the third stage we use the eval function to compile the text into a
    // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
    // in JavaScript: it can begin a block or an object literal. We wrap the text
    // in parens to eliminate the ambiguity.
    j = eval('(' + text + ')');

    return j;
  }

  this.php_js = this.php_js || {};
  this.php_js.last_error_json = 4; // usable by json_last_error()
  return null;
}










// ---- LIXO ---- //
function colaborador_incluir(param1){
	document.getElementById('div1').innerHTML = "Aaaaaaaaaaaaaaaaaaaa" ;
	document.getElementById('id').focus();
}

function isNumber(n){ 
	return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
} 


/*
<input type="button" class="button1 imprimir" value="Imprimir" onclick="javaScript:window.print()">
git clone https://github.com/helhoso/rhbrasil
*/
</script>

