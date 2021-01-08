mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0aHVyLWdhbWJvYSIsImEiOiJja2lqMHp1NTcwcjdnMnl1ZjRlcHVubWl3In0.ZIJJ7jKQF1YGg8L6FpOeDA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.49, 29.42], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

$.get("http://api.openweathermap.org/data/2.5/forecast", {
     APPID: mapboxKey,
     q:     "San Antonio, US",
     units: "imperial"
    }).done(function(data) {

        for (var i = 0; i < 5; i++) {
            console.log("Current Weather", data);
            const date = data.list[i].dt_txt.split(" ");

            let HTML = "";

            HTML =
                '<div class="card" style="width: 12rem;"> <div class="card-body">' +
                '<h6 class="card-title" id="current-date">' + date[0] + '</h6>' +

                '<h5 class="card-text" id="location">' + '<h5>' + data.city.name + ", " +
                data.city.country + '</h5>' +

                '<p id="low-high">' + "Low: " + "<strong>" + data.list[i].main.temp_min +
                ' ºF</strong>' + "<br>" + "High: " + "<strong>" + data.list[i].main.temp_max +
                ' ºF</strong>' + "</p>" +

                '<p id="wind">' + "Wind: " + "<strong>" + data.list[i].wind.speed +
                ' mph</strong></p>' +

                '<p id="pressure">' + "Pressure: " + "<strong>" + data.list[i].main.pressure +
                '</strong></p>';

            $("#divToAppend").append(HTML);
        }
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map)
    .setDraggable(true)
    .on('dragend', onDragEnd);