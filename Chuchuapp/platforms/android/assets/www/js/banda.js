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

			$(".brand-logo").html("BANDA");
			$("#href_banda_bck").attr("href","musica.html?cat="+params['cat'])

			$(".button-collapse").sideNav();
		})


	});




	
	$.getJSON("http://chuchuapp.mx/chuchuapp_server/get/banda/"+params['band']).done(function(datos_del_ws){


		$.each(datos_del_ws, function(indice,valor){
		
			$("#div_containerbandas").append('<div class="div_fondo_banda_video">'+
    '<iframe style="width:100%; height:auto;" src="https://www.youtube.com/embed/'+valor.url+'">'+
    '</iframe><div class="center div_title_section_banda">'+valor.nombre+'</div>'+
    '<div class="div_subtitle_section_banda">'+valor.historia+'</div>'+
    '<div class="div_center_padding25">'+
     '<button name="'+valor.id+'" class="button_contratar_banda waves-effect waves-light">CONTRATAR</button></div></div>');

		})

	});


	$("#div_containerbandas").on("click", ".button_contratar_banda", function(event){
     var valor_id=$(this).attr("name");
     window.location.href = "horas.html?band="+valor_id+"&cat="+params['cat'];
	});

	


});


