(function(){
    
    //create map in leaflet and tie it to the div called 'theMap'
    var map = L.map('theMap').setView([42, -60], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    //get json data
    fetch(`https://opensky-network.org/api/states/all`)
    .then(response => response.json())
    .then(json => {
        window.setInterval(function() {
            console.log("Raw Api Data");
            console.log(json);
            getJson(json);
        }, 30000); // 30 seconds

    }).then((data) => {
            window.setInterval(function(){
                console.log("Raw Api Data");
                console.log(data);
            }, 30000)
            //console.log(data);
        });

    //     fetch('https://opensky-network.org/api/states/all')
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // });

    var planeIcon = L.icon({
        iconUrl: 'plane.png',
        iconSize: [20, 20]
        });

    function getJson(jsonData) { 
        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        for (var i = 0; i < jsonData.states.length; i++) {

            var geojsonFeature = {
                "type": "Feature",
                "properties": {
                    "icao24": jsonData.states[i][0],
                    "callsign": jsonData.states[i][1],
                    "origin_country": jsonData.states[i][2],
                    "time_position": jsonData.states[i][3],
                    "last_contact": jsonData.states[i][4],
                    "longitude": jsonData.states[i][5],
                    "latitude": jsonData.states[i][6],
                    "baro_altitude": jsonData.states[i][7],
                    "on_ground": jsonData.states[i][8],
                    "velocity": jsonData.states[i][9],
                    "true_track": jsonData.states[i][10],
                    "vertical_rate": jsonData.states[i][11],
                    "sensors": jsonData.states[i][12],
                    "geo_altitude": jsonData.states[i][13],
                    "squawk": jsonData.states[i][14],
                    "spi": jsonData.states[i][15],
                    "position_source": jsonData.states[i][16],
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [jsonData.states[i][5], jsonData.states[i][6]],
                    "rotation": 45

                }
            };
            
            //console.log(JSON.stringify(geojsonFeature));

            console.log("GeoJSON Data");
            console.log(geojsonFeature);

            //console.log(JSON.stringify(geojsonFeature, null, " "));

            L.geoJSON(geojsonFeature, {
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {icon: planeIcon, rotationAngle: feature.properties.true_track})
                }
            }).addTo(map).bindPopup(jsonData.states[i][1]);
        }

    }

})()