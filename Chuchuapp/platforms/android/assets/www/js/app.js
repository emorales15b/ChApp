$(document).ready(function(){

	var data_menu = localStorage.getItem("87ea5dfc8b8e384d848979496e706390b497e547");


	if(data_menu=="null"){
		data_menu='menu';
	}

	$.getJSON("https://chuchuapp.mx/chuchuapp_server/get/navbar/"+data_menu+"").done(function(datos_del_ws){


	 	$.each(datos_del_ws, function(indice,valor){
			$("#navbar_main").append(valor);

			$(".button-collapse").sideNav();
		})




	 	//BUTTON CERRAR SESSION
		$(".sidebar_login").on("click", ".li_close_sessionr", function(event){


			swal({
			  title: "¿Cerrar sesión?",
			  text: "¿Estas seguro de que quieres cerrar sesión?",
			  cancelButtonText: "Cancelar",
			  showCancelButton: true,
			  confirmButtonColor: 'rgb(245, 50, 50)',
			  confirmButtonClass: "btn-danger",
			  confirmButtonText: "Salir",
			  closeOnConfirm: false
			},
			function(){
			  
			  localStorage.setItem("87ea5dfc8b8e384d848979496e706390b497e547", null);
			 localStorage.setItem("b665e217b51994789b02b1838e730d6b93baa30f", null);
			 localStorage.setItem("4fc1c3d194ae4793ee3eb1cd30eb28cbc29c5b59", null);
			 localStorage.setItem("b7caa84ce00cffd0cf2fa2d6bb55f5f28bffda00", null);
		 


			 localStorage.setItem("band", null);
			 localStorage.setItem("cat", null);
			 localStorage.setItem("horas", null);
			 localStorage.setItem("dia", null);
			 localStorage.setItem("mes", null);
			 localStorage.setItem("anio", null);
			 localStorage.setItem("time_hora", null);
			 localStorage.setItem("time_min", null);

			 location.href = "index.html";


			});	//FIN SWAL


		 });	// FIN BUTTON CERRAR SESSION





	});




	$.getJSON("https://chuchuapp.mx/chuchuapp_server/get/categorias/lista").done(function(datos_del_ws){


		$.each(datos_del_ws, function(indice,valor){
			$("#category_div_ul ul").append('<li name="'+valor.id+'" class="category_band collection-item avatar waves-effect waves-teal">'+
				'<img src="'+valor.imagen+'" alt="" class="circle"><span class="title">'+valor.nombre+'</span>'+
				'<a href="#!" class="secondary-content"><span class="fa fa-chevron-right fa-2x"></span></a></li>');
		})


	});







	$(".ul_category").on("click", ".category_band", function(event){
     var valor_id=$(this).attr("name");
     window.location.href = "musica.html?cat="+valor_id;
	});
	


});

