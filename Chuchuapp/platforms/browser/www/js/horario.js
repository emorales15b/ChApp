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

            $("#href_banda_bck").attr("href","fecha.html?band="+params['band']+"&cat="+params['cat']);

            $(".button-collapse").sideNav();
        })


    });



	
	$.getJSON("http://chuchuapp.mx/chuchuapp_server/get/horas/"+params['band']).done(function(datos_del_ws){


		$.each(datos_del_ws, function(indice,valor){



			
			$(".brand-logo").append(valor.nombre);
		
			$("#div_containerhorario").append('<div class="div_fondo_banda_video">'+
    '<img class="img_main_horas" src="'+valor.imagen+'">'+
    '<div class="center div_title_section_banda">¿Inicio del Evento?</div>'+
    '<div class="center title_minimo_horas">Indica la hora en que necesitas a la banda</div>'+
    '<div class="center">'+
    '<input type="text" placeholder="Selecciona la hora" class="datepicker timepicker input_select_fecha"></div>'+
    '<div class="div_center_padding25">'+
    '<button class="button_contratar_banda waves-effect waves-light">CONTRATAR</button></div>'+
    '</div>');

		})


		$('.timepicker').pickatime({
        default: 'now', // Set default time: 'now', '1:30AM', '16:30'
        fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: false, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Limpiar', // text for clear-button
        canceltext: 'Cancelar', // Text for cancel-button
        autoclose: false, // automatic close timepicker
        ampmclickable: true, // make AM PM clickable
        aftershow: function(){} //Function for after opening timepicker
      });



	});



	$("#div_containerhorario").on("click", ".button_contratar_banda", function(event){
     var valor_id=params['band'];
     var valor_horas=params['horas'];
     var valor_dia=params['dia'];
     var valor_mes=params['mes'];
     var valor_anio=params['anio'];
     var valor_time_hora=$(".clockpicker-span-hours").text();
     var valor_time_min=$(".clockpicker-span-minutes").text();
     
     if((valor_time_hora.length==0) && (valor_time_min.length==0)){
     	swal("Selecciona una hora");
     }else{

        var data_menu = localStorage.getItem("87ea5dfc8b8e384d848979496e706390b497e547");


        if(data_menu=="null"){
            
            window.location.href = "login.html?band="+valor_id+"&cat="+params['cat']+"&horas="+valor_horas+"&dia="+valor_dia+"&mes="+valor_mes+"&anio="+valor_anio+"&time_hora="+valor_time_hora+"&time_min="+valor_time_min;

        }else{

            window.location.href = "map_gps.html";

        }





     }
     
	});

	



});


