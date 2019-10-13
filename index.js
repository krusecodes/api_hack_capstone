let isNewsSuccess = false;

let isLocationSuccess = false;

$('#map').hide();
$('#iconClick').hide();
$('main').hide();

'use strict';

const apiKey = 'cf4f9887a1b64546af749e8c8bf3a1c6'

const searchURL = 'https://newsapi.org/v2/everything';

// $('.container').hide;




function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayResults(responseJson, maxResults) {
  // if there are previous results, remove them
  console.log(responseJson);
  $('#results-list').empty();
  if (responseJson.totalResults === 0){
    console.log("things")
    $("#wrongNews").append(
      `<h3 class="alert">Something went wrong: try another search.</h3>`
    )
    return;
  } else {
    isNewsSuccess = true;
  // iterate through the articles array, stopping at the max number of results
  for (let i = 0; i < responseJson.articles.length & i<maxResults ; i++){
    // for each video object in the articles
    //array, add a list item to the results 
    //list with the article title, source, author,
    //description, and image
    $('#results-list').append(
      `<h1 class="newsTitle">News finder</h1>
      <h2>Search results</h2>
      <li><h3><a href="${responseJson.articles[i].url}">${responseJson.articles[i].title}</a></h3>
      <p><b>${responseJson.articles[i].source.name}</b></p>
      <p><b>By ${responseJson.articles[i].author}</b></p>
      <p><b>${responseJson.articles[i].description}</b></p>
      <img class="newPics" src='${responseJson.articles[i].urlToImage}'>
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
}
};

function getNews(query, maxResults=5) {
  const params = {
    q: query,
    language: "en",
  };
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

  console.log(url);

  const options = {
    headers: new Headers({
      "X-Api-Key": apiKey})
  };

  fetch(url, options)
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson, maxResults))
    .catch(err => {
      console.log(err)
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });

}

// google map style

let mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.business",
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
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ] 

let map;
let infowindow;
let service;
let bounds;
let markers = [];



let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

// The Map
function initMap() {
    let Center = {
        lat: 0,
        lng: 0
    }

    map = new google.maps.Map(document.getElementById('map'), {
        center: Center,
        zoom: 1,
        gestureHandling: 'cooperative',
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
        styles: mapStyle
    });

    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    // Create the search box and link it to the UI element.
    let input = document.getElementById('pac-input');
    let searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_CENTER].push(input)

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    // searchBox.addListener('places_changed', function () {

    $( "#submit" ).click(function() {
      // News API
      event.preventDefault();
      const searchTerm = $('#js-search-term').val();
      const maxResults = $('#js-max-results').val();
      console.log(searchTerm)


      // Google Map API
        bounds = new google.maps.LatLngBounds();
        let places = searchBox.getPlaces();
        console.log(places)
        if (!places) {
          $("#wrongMap").append(
            `<h3 class="alert">Something went wrong: try another search.</h3>`
          )
          return;
      } else {
        isLocationSuccess = true;
        getNews(searchTerm, maxResults);
      }
      if (isNewsSuccess === false) {
        return;
      }
        let place = places[0];
        $('#map').show();
        $('#iconClick').show();
        $('main').show();
        $('header').hide();
    

        // places long form
        // let places = new google.maps.places.SearchBox(document.getElementById('pac-input')).getPlaces();

        // Places Search Option: Nearby Search
        service.nearbySearch({
            location: place.geometry.location,
            radius: 40000,
            type: 'cafe',
            maxResults: 50,
            rankby: 'prominence'
        }, c);


        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
            
        } else {
            bounds.extend(place.geometry.location);
            
        }

        map.fitBounds(bounds);

        //sets Google search box back to empty
        $('#pac-input').val('');

    });
}

//callback function as dictated by Google Maps API
function c(results, status) {

    if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(createMarker);
    }
}

$("#newSearch").click(function() {
  event.preventDefault();
  $('#map').hide();
  $('#iconClick').hide();
  $('main').hide();
  $('header').show();
  location.reload();
});

$("input").prop('required',true);

function createMarker(place) {
    markers = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: {
          url: "Content/Coffee_3.png",
          scaledSize: new google.maps.Size(64, 64)
        }
    });

    // Displays cafe's info when user clicks on Marker
    google.maps.event.addListener(markers, 'click', function () {

        let request = {
            reference: place.reference
        };

        service.getDetails(request, function (details, status) {
            let currentPlace = {};

            // Utilizes Google Places photo function if photo exists for location
            if (!place.photos) {
                currentPlace.photo = 'images/no-image.jpg';
            } else {
                currentPlace.photo = place.photos[0].getUrl({
                    maxHeight: 640
                });
            }
            // Sets Google details if defined, otherwise sets to empty string
            (!details.formatted_address) ? currentPlace.address = "": currentPlace.address = details.formatted_address;
            (!details.formatted_phone_number) ? currentPlace.phone = "": currentPlace.phone = details.formatted_phone_number;
            (!details.rating) ? currentPlace.rating = "": currentPlace.rating = details.rating;
            (!details.url) ? currentPlace.directions = "": currentPlace.directions = details.url;
            (!details.website) ? currentPlace.website = "": currentPlace.website = details.website;
            (!details.types) ? currentPlace.types = "": currentPlace.types = details.types;

            renderCafePage(place, currentPlace);


        });
    });

    // Shows name when user hovers over markers
    google.maps.event.addListener(markers, 'mouseover', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

