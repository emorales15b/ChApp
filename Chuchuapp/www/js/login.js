$(document).ready(function(){



  var data_menu = localStorage.getItem("87ea5dfc8b8e384d848979496e706390b497e547");


        if(data_menu=="null"){
            

        }else{

            window.location.href = "index.html";

        }


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

            $(".brand-logo").html("LOGIN");

            $(".button-collapse").sideNav();

            $("#href_banda_bck").attr("href","horario.html?band="+params['band']+"&cat="+params['cat']+"&horas="+params['horas']+"&dia="+params['dia']+"&mes="+params['mes']+"&anio="+params['anio']);
        })


    });






 $(".button_entrar_main").click(function(){

    if($("#correo").val()==''){
        alertify.error('Correo vacio. Verifícalo');
        return false;
    }else if($("#password").val()==''){
        alertify.error('Contraseña vacia. Verifícala');
        return false;
    }else{


 var url = "http://chuchuapp.mx/chuchuapp_server/get/usuario/validacion"; // El script a dónde se realizará la petición.
    $.ajax({
           type: "POST",
           url: url,
           data: $("#form_user").serialize(), // Adjuntar los campos del formulario enviado.
           success: function(data)
           {
               if(data=='invalid_mail'){
                alertify.error('Correo incorrecto. Verifícalo');
                return false;
               }else if(data=='invalid_password'){
                alertify.error('Contraseña incorrecta. Verifícala');
                return false;
               }else{


                var paramstr = window.location.search.substr(1);
                var paramarr = paramstr.split ("&");
                var params = {};

                for ( var i = 0; i < paramarr.length; i++) {
                    var tmparr = paramarr[i].split("=");
                    params[tmparr[0]] = tmparr[1];
                }


                 $.each(data, function(indice,valor){

                    localStorage.setItem("87ea5dfc8b8e384d848979496e706390b497e547", valor.res1);
                    localStorage.setItem("b665e217b51994789b02b1838e730d6b93baa30f", valor.res4);
                    localStorage.setItem("4fc1c3d194ae4793ee3eb1cd30eb28cbc29c5b59", valor.res2);
                    localStorage.setItem("b7caa84ce00cffd0cf2fa2d6bb55f5f28bffda00", '356a192b7913b04c54574d18c28d46e6395428ab');



                    localStorage.setItem("band", params['band']);
                    localStorage.setItem("cat", params['cat']);
                    localStorage.setItem("horas", params['horas']);
                    localStorage.setItem("dia", params['dia']);
                    localStorage.setItem("mes", params['mes']);
                    localStorage.setItem("anio", params['anio']);
                    localStorage.setItem("time_hora", params['time_hora']);
                    localStorage.setItem("time_min", params['time_min']);


                });
                
                location.href = "map_gps.html";
               }
           }
         });

    return false; // Evitar ejecutar el submit del formulario.


    };

 });



});




