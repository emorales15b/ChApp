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

            $("#href_banda_bck").attr("href","horas.html?band="+params['band']+"&cat="+params['cat']);

            $(".button-collapse").sideNav();
        })


    });


	
	$.getJSON("http://chuchuapp.mx/chuchuapp_server/get/horas/"+params['band']).done(function(datos_del_ws){


		$.each(datos_del_ws, function(indice,valor){



			
			$(".brand-logo").append(valor.nombre);
		
			$("#div_containerfecha").append('<div class="div_fondo_banda_video">'+
    '<img class="img_main_horas" src="'+valor.imagen+'">'+
    '<div class="center div_title_section_banda">¿Qué día es tu evento?</div>'+
    '<div class="center title_minimo_horas">Selecciona un día</div>'+
    '<div class="center">'+
    '<input type="text" placeholder="Selecciona la fecha" class="datepicker input_select_fecha"></div>'+
    '<div class="div_center_padding25">'+
    '<button class="button_contratar_banda waves-effect waves-light">SIGUIENTE</button></div>'+
    '</div>');

		})


		$('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Ok',
        labelMonthSelect: 'Selecciona un mes',
        labelYearSelect: 'Selecciona un año',
        labelMonthNext: 'Mes siguiente',
        labelMonthPrev: 'Mes anterior',
        monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
        weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
        weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
        weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
        closeOnSelect: false // Close upon selecting a date,
      	});

      	$(".picker__day-display").text('');
      	$(".picker__month-display").text('');

	});



	$("#div_containerfecha").on("click", ".button_contratar_banda", function(event){
     var valor_id=params['band'];
     var valor_horas=params['horas'];
     var valor_dia=$(".picker__day-display").text();
     var valor_mes=$(".picker__month-display").text();
     var valor_anio=$(".picker__year").text();
     
     if((valor_dia.length==0) && (valor_mes.length==0)){
     	swal("Selecciona una fecha");
     }else{
     	window.location.href = "horario.html?band="+valor_id+"&cat="+params['cat']+"&horas="+valor_horas+"&dia="+valor_dia+"&mes="+valor_mes+"&anio=2018";
     }
     
	});

	



});


