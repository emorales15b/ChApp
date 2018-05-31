$(document).ready(function(){

	var paramstr = window.location.search.substr(1);
	var paramarr = paramstr.split ("&");
	var params = {};

	for ( var i = 0; i < paramarr.length; i++) {
	    var tmparr = paramarr[i].split("=");
	    params[tmparr[0]] = tmparr[1];
	}




	$.getJSON("https://chuchuapp.mx/chuchuapp_server/get/second_nav/menu").done(function(datos_del_ws){


		$.each(datos_del_ws, function(indice,valor){
			$("#navbar_main").append(valor);

			$(".brand-logo").html("MÚSICA");
			$("#href_banda_bck").attr("href","index.html");

			$(".button-collapse").sideNav();
		})


	});







	

	$.getJSON("http://chuchuapp.mx/chuchuapp_server/get/musica/"+params['cat']).done(function(datos_del_ws){


		$.each(datos_del_ws, function(indice,valor){
			$("#div_container_musicos").append('<div name="'+valor.id+'" class="div_fondo_banda_musica waves-effect waves-light" style="background-image: url('+valor.imagen+');">'+
      '<img class="img_barras_musica" src="img/img_detalle_bandas.png">'+
      '<div class="div_title_banda_music">'+valor.nombre+' <span class="precio_musica">$'+valor.costo+'</span></div>'+
    	'</div>');
		})


	});


	$("#div_container_musicos").on("click", ".div_fondo_banda_musica", function(event){
     var valor_id=$(this).attr("name");
     window.location.href = "banda.html?band="+valor_id+"&cat="+params['cat'];
	});


	


});


