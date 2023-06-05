
<script>
    function testButtonClick(city) {
        if (!city.trim()) {
            alert("Enter a city.");
            return;
        }
        const resultContainer = document.getElementById("astronomy");
        resultContainer.innerHTML = "";
        const url = "https://weatherapi-com.p.rapidapi.com/astronomy.json?q=" + city;
        const headers = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '0b6ef107f7msh5606de624633ceap17521ejsn27566d20ff5b',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            },
        };

    // I copied and pasted from rapid api above 

        fetch(url, headers)
        .then(response => {
            if (response.status !== 200) {
                const errorMsg = 'Database response error: ' + response.status;
                console.log(errorMsg);
            }
        // The code above fetched data from the api itself, and the const made it so it is permanent 

            // I assigned different elements to different data, such as the name of the reigon,
            response.json().then(data => {
                console.log(data);
                console.log(data.location)
                document.getElementById("name").innerHTML = data.location.name;
                document.getElementById("region").innerHTML = data.location.region;
                document.getElementById("country").innerHTML = data.location.country;
                document.getElementById("lat").innerHTML = data.location.lat;
                document.getElementById("lon").innerHTML = data.location.lon;
                document.getElementById("tz_id").innerHTML = data.location.tz_id;
                document.getElementById("localtime_epoch").innerHTML = data.location.localtime_epoch;
                document.getElementById("localtime").innerHTML = data.location.localtime;
                const tr = document.createElement("tr");
                const sunrise = document.createElement("td");
                const sunset = document.createElement("td");
                const moonrise = document.createElement("td");
                const moonset = document.createElement("td");
                const moon_phase = document.createElement("td");
                const moon_illumination = document.createElement("td");
                sunrise.innerHTML = data.astronomy.astro.sunrise;
                sunset.innerHTML = data.astronomy.astro.sunset;
                moonrise.innerHTML = data.astronomy.astro.moonrise;
                moonset.innerHTML = data.astronomy.astro.moonset;
                moon_phase.innerHTML = data.astronomy.astro.moon_phase;
                moon_illumination.innerHTML = data.astronomy.astro.moon_illumination;
                tr.appendChild(sunrise);
                tr.appendChild(sunset);
                tr.appendChild(moonrise);
                tr.appendChild(moonset);
                tr.appendChild(moon_phase);
                tr.appendChild(moon_illumination);
                resultContainer.appendChild(tr);
            })
        })
        // I created the html for this below, I used tr and th for the table, and I make a button with line 72 of the code
    }
</script>
<body>
<h1>API Information and Example</h1>
<label for="city">Enter city name:</label>
<input type="text" id="city" name="city">&nbsp;&nbsp;<input type="button" value="Get Location & Astronomy" onclick="testButtonClick(document.getElementById('city').value)">
<br><br>
<table>
  <thead>Location Details
  <tr>
    <th>City</th>
    <th>Region</th>
    <th>Country</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Time Zone</th>
    <th>Local Time Epoch</th>
    <th>Local Date and Time</th>
  </tr>
  </thead>
  <tbody>
    <td id="name"></td>
    <td id="region"></td>
    <td id="country"></td>
    <td id="lat"></td>
    <td id="lon"></td>
    <td id="tz_id"></td>
    <td id="localtime_epoch"></td>
    <td id="localtime"></td>
  </tbody>
</table>
<table>
    <thead>Astronomy Details
    <tr>
        <th>Sunrise</th>
        <th>Sunset</th>
        <th>Moonrise</th>
        <th>Moonset</th>
        <th>Moon Phase</th>
        <th>Moon Illumination</th>
    </tr>
    </thead>
    <tbody id="astronomy">
    </tbody>
</table>