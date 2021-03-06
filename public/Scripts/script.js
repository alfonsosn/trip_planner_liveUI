var map;

function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705786,-74.007672);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styleArr
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });
}

function drawLocation (location, opts) {
    if (typeof opts !== 'object') {
        opts = {}
    }
    opts.position = new google.maps.LatLng(location[0], location[1]);
    opts.map = map;
    var marker = new google.maps.Marker(opts);
}

var styleArr = 
[
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 60
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ef8c25"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b6c54c"
            },
            {
                "lightness": 40
            },
            {
                "saturation": -40
            }
        ]
    },
    {}
]

$(document).ready(function() {
    initialize_gmaps();

    $('#hotels_button').on('click', function(){
        var hotelSelection = ($("#hotels_selector option:selected").text());
        var span = $('<span class="title">'+ hotelSelection +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
        $("#itinerary-hotel").append(span)
        $('.remove').on('click', function(){
	    	$(this).prev().remove();
	    	$(this).remove();
	    })
    });
    $('#restaurants_button').on('click', function(){
        var restaurantSelection = ($("#restaurants_selector option:selected").text());
        var span = $('<span class="title">'+ restaurantSelection +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
        $("#itinerary-restaurant").append(span);
        $('.remove').on('click', function(){
	    	$(this).prev().remove();
	    	$(this).remove();
	    })
    });

    $('#things_to_do_button').on('click', function(){
    	var thingsToDoSelection = ($("#things_to_do_selector option:selected").text());
        var span = $('<span class="title">'+ thingsToDoSelection +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
        $("#itinerary-things").append(span);
        $('.remove').on('click', function(){
	    	$(this).prev().remove();
	    	$(this).remove();
	    })
    });

    

})