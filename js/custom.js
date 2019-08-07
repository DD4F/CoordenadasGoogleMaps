
var WifiDataJson = {}; // Variable global del Json

function Maps(id){
    console.log(id);
    var Name = [];
    var Lat = [];
    var Long = [];
    Name = WifiDataJson.map((el) => el.name);
    Lat = WifiDataJson.map((el) => el['the_geom'].coordinates[1]);
    Long = WifiDataJson.map((el) => el['the_geom'].coordinates[0]);
    
    var map = new google.maps.Map(document.getElementById('Map'), {
        center: new google.maps.LatLng(Lat[id], Long[id]),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15
    });
    // AddMarker
    var location = new google.maps.LatLng(Lat[id], Long[id]);
    addMarker(map,Name[id],location);
};

// Iniciamos google Maps
function initMap() {        
    var map = new google.maps.Map(document.getElementById('Map'), {
        center: new google.maps.LatLng(8.7479800, -75.8814300),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15
    });
};

function addMarker(map, name, location){
    var infoWindow;
    var locationMarker = new google.maps.Marker({
        position: location,
        map: map,
        title: name
    });
    
    infoWindow = new google.maps.InfoWindow({
        content:name 
    });

    locationMarker.addListener('click', function() {
        infoWindow.open(map, locationMarker);
      });
};

$(document).ready(function() {

    // Se realiza click en menu -> Zonas EPS
    $("#Data").click(function(){
        console.log("Click Data");
        $('#Table').load("recurso.php",function(){
            $.ajax({
                async: true,   // this will solve the problem
                url : 'data.json',
                type : 'GET',
                dataType : 'json',
                beforeSend: function () {
                    console.log("Procesando, espere por favor...");
                },
                success : function(DataContent){
                    WifiDataJson = DataContent;
                    console.log("Procesando peticion ajax");
                    var tr;
                        
                    for ( var i=0; i < DataContent.length; i++){
                        tr = $('<tr>');
                        tr.append("<td>" + DataContent[i].name + "</td>");
                        tr.append("<td>" + DataContent[i]['the_geom'].coordinates[1] + "</td>");
                        tr.append("<td>" + DataContent[i]['the_geom'].coordinates[0] + "</td>");
                        tr.append('<td>'+'<a class="ui image label" onclick="Maps(' +i+')"> Localizar </a>'+'</td>' );
                        $('#MostarData').append(tr);
                    }
                },
                error : function(xhr, status) {
                    console.log('ha ocurrido un error en la peticion ajax, no se obtuvieron los datos');
                },
                complete : function(xhr, status){
                    console.log(' la Petición ha sido completada');
                        
                }

            });
        });
    });
});

/*
    Documentacion y ejemplos de google Maps
    https://developers.google.com/maps/documentation/javascript/examples/

*/