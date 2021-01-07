 mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0aHVyLWdhbWJvYSIsImEiOiJja2lqMHp1NTcwcjdnMnl1ZjRlcHVubWl3In0.ZIJJ7jKQF1YGg8L6FpOeDA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

 $.get("http://api.openweathermap.org/data/2.5/forecast", {
     APPID: mapboxKey,
     q:     "San Antonio, US",
     units: "imperial"
 }).done(function(data) {
     console.log("current weather", data);
 });
