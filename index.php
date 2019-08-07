<!DOCTYPE html>
<html>
    <head>
        <title>Google Maps</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Framework Css-Semantic-->
        <link rel="stylesheet" type="text/css" href="semantic/semantic.css">

    </head>
    <body >
        <div class="ui secondary pointing menu">
            <a class="item" id="Data" > Consultas Datos </a>
        </div>

        <div class="ui segment" id="Map">
        
        </div>
        <style>
            #Map {
                height: 400px;
                width: 100%;
            }
        </style>

        <div class="ui segment" id="Table">
        
        </div>
        
    </body>

    <script type="text/javascript" src="js/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="semantic/semantic.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbsmvEJ4f2v_OYM-mqqyaXj0GOI0tKhoo&callback=initMap" async defer></script>

</html>