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

			$("#href_banda_bck").attr("href","banda.html?band="+params['band']+"&cat="+params['cat']);

			$(".button-collapse").sideNav();
		})


	});



	
	$.getJSON("http://chuchuapp.mx/chuchuapp_server/get/horas/"+params['band']).done(function(datos_del_ws){


		$.each(datos_del_ws, function(indice,valor){

			var costo_format1=((valor.costo)*2);
			var nuevo_valor1=parseFloat(costo_format1).toLocaleString('en');

			var costo_format2=((valor.costo)*3);
			var nuevo_valor2=parseFloat(costo_format2).toLocaleString('en');

			var costo_format3=((valor.costo)*4);
			var nuevo_valor3=parseFloat(costo_format3).toLocaleString('en');

			var costo_format4=((valor.costo)*5);
			var nuevo_valor4=parseFloat(costo_format4).toLocaleString('en');

			
			$(".brand-logo").html(valor.nombre);
		
			$("#div_containerhoras").append('<div class="div_fondo_banda_video">'+
    '<img class="img_main_horas" src="'+valor.imagen+'">'+
    '</div><div class="center div_title_section_banda">¿Cuántas horas?</div>'+
'<div class="center title_minimo_horas">El minimo es de: 2 horas</div>'+
'<div class="carousel">'+
'<a class="carousel-item" href="#two!" name="2"><div>2</div><div class="center title_precion_banda">$ '+nuevo_valor1+'.00 mxn</div></a>'+
'<a class="carousel-item" href="#three!" name="3"><div>3</div><div class="center title_precion_banda">$ '+nuevo_valor2+'.00  mxn</div></a>'+
'<a class="carousel-item" href="#four!" name="4"><div>4</div><div class="center title_precion_banda">$ '+nuevo_valor3+'.00 mxn</div></a>'+
'<a class="carousel-item" href="#five!" name="5"><div>5</div><div class="center title_precion_banda">$ '+nuevo_valor4+'.00 mxn</div></a>'+
'</div>'+
'<div class="div_center_padding25">'+
'<button class="button_contratar_banda waves-effect waves-light">SIGUIENTE</button>'+
'</div>');

		})


		$('.carousel').carousel(
        );

	});


	$("#div_containerhoras").on("click", ".button_contratar_banda", function(event){
     var valor_id=params['band'];
     var valor_hora=$(".carousel-item.active").attr("name");
     window.location.href = "fecha.html?band="+valor_id+"&horas="+valor_hora+"&cat="+params['cat'];
	});

	



});


