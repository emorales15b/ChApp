$(document).ready(function(){

	var latitud_position, map, geocoder, marker;



	$.getJSON("https://chuchuapp.mx/chuchuapp_server/get/navbar_login/menu_login").done(function(datos_del_ws){


		$.each(datos_del_ws, function(indice,valor){
			$("#navbar_main").append(valor);

			$(".button-collapse").sideNav();
		})


	});


});





jQuery(function($){



		function initMap() {

			var onSuccess = function(position) {
			    latitud_position = position.coords.latitude;
			    longitud_position = position.coords.longitude;

          position_get={lat: latitud_position, lng: longitud_position};

          show_map(position_get);

			};



			 
			// Recibe un objeto PositionError en caso de que falle
			function onError(error) {
			    var position_get = {lat: 21.5045647, lng: -104.8897599};
          show_map(position_get);
			}
			 


			navigator.geolocation.getCurrentPosition(onSuccess, onError, {aximumAge:600000, timeout:15000, enableHighAccuracy: true});


			}



      function show_map(posicion_get){

      function closeInfoWindow() {
        infowindow.close();
      }



      geocoder = new google.maps.Geocoder();
      var infowindow = new google.maps.InfoWindow();



        var position_fuction=posicion_get;

        var myposition = position_fuction;
               map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                styles:[
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#68c75d"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#a4d3a6"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#a3a3a3"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
              ],
                gestureHandling: 'greedy',
                disableDefaultUI: true,
                center: myposition
              });






                            // AUTOCOMPLETAR
   /*     var input = (
            document.getElementById('pac-input'));

        var types = document.getElementById('type-selector');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
        //  marker.setIcon( ({
        //    url: place.icon,
        //    size: new google.maps.Size(71, 71),
        //    origin: new google.maps.Point(0, 0),
        //   anchor: new google.maps.Point(17, 34),
        //    scaledSize: new google.maps.Size(35, 35)
        //  }));

          //ESTO ME TRAE LAS COORDENADAS DE LA DIRECCION
          alert(place.geometry.location)

          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          $(".div_direccion_map_dinamic").html(address);
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
          infowindow.open(map, marker);
        });*/
        // FIN AUTOCOMPLETAR







var image = 'https://chuchuapp.mx/chuchuapp_client/www/img/icons/pinmap.png';

              var marker = new google.maps.Marker({
                position: myposition,
                animation: google.maps.Animation.DROP,
                draggable: false,
                map: map,
                icon: image
              });




              position_center_function();







        G.event.addListener(map, 'click', function(){
            closeInfoWindow();
          });




        function position_center_function(){
          var c = map.getCenter();
          var center_lat=c.lat();
          var center_long=c.lng();

          codeLatLng(center_lat,center_long);
        }




        //FUNCION PARA OBTENER DIRECCION AL INICIAR MAPA
        function codeLatLng(lat,lng) {
        var lat = lat;
        var lng = lng;
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({'latLng': latlng}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              map.fitBounds(results[0].geometry.viewport);
                      marker.setMap(map);
                      marker.setPosition(latlng);


              $(".div_direccion_map_dinamic").html(results[0].formatted_address);

            //  infowindow.setContent(results[0].formatted_address);
            //  infowindow.open(map, marker);
              G.event.addListener(marker, 'click', function(){
                  infowindow.setContent(results[0].formatted_address);
                  infowindow.open(map, marker);
              });
            } else {
              alert('No results found');
            }
          } else {
            //alert('Geocoder failed due to: ' + status);
          }
        });
      }






       // marker.setMap(null);

      $(".a_mi_ubicacion_function").on("click",function(){
          initMap();
      })






      } // FIN FUNCTION initMap






      var G = google.maps;

      G.event.addDomListener(window, 'load', initMap);



})



