function initialize() {

	var dataitem =
		{ "property": [
			{"property_id": 1, "property_title": "property 1", "property_img": "imag1", "longitude":  151.274856, "latitude": -33.890542, "width": 500, "height": 375},
			{"property_id": 2, "property_title": "property 2", "property_img": "imag1", "longitude": 151.259052, "latitude": -33.923036, "width": 500, "height": 375},
			{"property_id": 3, "property_title": "property 3", "property_img": "imag1", "longitude": 151.157507, "latitude": -34.028249, "width": 500, "height": 375},
			{"property_id": 4, "property_title": "property 4", "property_img": "imag1", "longitude": 151.28747820854187, "latitude": -33.80010128657071, "width": 500, "height": 375},
			{"property_id": 5, "property_title": "property 5", "property_img": "imag1", "longitude": 151.259302, "latitude": -33.950198, "width": 500, "height": 375}
		]};


	var title="Title";
	var latitude = null;
	var longitude = null;
	var latitudetest = null;
	var longitudetest = null;
	var mapOptions = {
		center: new google.maps.LatLng(-33.92, 151.25),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP

	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	for (i = 0; i < 5; i++) {

		var dataProperty = dataitem.property[i];


		latitudetest =dataProperty.latitude;
		longitudetest = dataProperty.longitude;


		var data= dataProperty.property_title;

		var myLatlng = new google.maps.LatLng(latitudetest, longitudetest);

		var infoWindow = new google.maps.InfoWindow();

		var bluePin = new google.maps.MarkerImage('http://maps.google.com/mapfiles/ms/micons/green-dot.png',
			new google.maps.Size(32, 32),
			new google.maps.Point(0, 0),
			new google.maps.Point(14, 35));
		var pinShadow = new google.maps.MarkerImage('http://maps.google.com/mapfiles/ms/micons/msmarker.shadow.png',
			new google.maps.Size(59, 32),
			new google.maps.Point(0, 0),
			new google.maps.Point(14, 35));

		var marker = new google.maps.Marker({
			position: myLatlng,
			icon: bluePin,
			shadow: pinShadow,
			map: map,
			title: 'Title'
		});
		(function (marker, data) {
			google.maps.event.addListener(marker, 'click', function (e) {
				infoWindow.setContent(data);
				infoWindow.open(map, marker);
			});
		})(marker, data);
	}

}

google.maps.event.addDomListener(window, 'load', initialize());