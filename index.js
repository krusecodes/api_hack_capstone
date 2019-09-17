
  
  //convert user input to latitude/longitude
  // function codeAddress(geocoder, map) {
  //   let address = $('#address').val();
  //   geocoder.geocode(
  //       {
  //           'address': address
  //       },
  //       function(results, status) {
  //           if(status === 'OK') {
  //               homeLoc = results[0].geometry.location;
  //               map.setCenter(results[0].geometry.location);
  //               let marker = new google.maps.Marker({
  //                   map: map,
  //                   position: results[0].geometry.location
  //               });
  //           } else {
  //               alert('Please enter a valid address');
  //           }
  //           compileResults(map, results[0].geometry.location);
  //       }
  //   );
  // }


// 'use strict';

// let homeLoc;
// let directionsService;
// let directionsDisplay;

// //load homepage
// $('.results-page').hide();
// $('.sidebar').hide();
// $('#map').hide();

// const apiKey = ''
// const baseURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch'

// let apiKey = ""

// let URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=50000&keyword=brewery&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&key="

// Getting multiple places
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.8976763%2C-77.0365298&radius=50000&keyword=brewery&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&key=

// $('.results-page').hide();

// function formatQueryParams(params) {
//   const queryItems = Object.keys(params).map(key => `${[encodeURIComponent(key)]}=${encodeURIComponent(params[key])}`);
//   return queryItems.join('&');
// }

// function displayResults(responseJson, maxResults) {
//   console.log(responseJson);
  
//   $('.js-error').empty();
//   $('.results-list').empty();

//   for (let i = 0; i < responseJson.data.length & i < maxResults; i++) {
//       $('.results-list').append(`<li><h3><a href="${responseJson.data[i].url}">${responseJson.data[i].fullName}</a></h3>
//       <p>${responseJson.data[i].description}</p>
//       </li>`);
//   }
//   $('.results').removeClass('hidden');
// }


// function findBeer(location) {
//     fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}`)
//       .then(response => response.json())
//       .then(responseJson => displayResults(responseJson))
//       .catch(error => alert('Something went wrong. Try again later.'));
//   }

//   function displayResults(responseJson) {
//     console.log(responseJson.status);
//     if (responseJson.status==="error") {
//       $('.results').html(`<h2>Sorry, this does not exist. Try a new address!</h2>`);
//     } else {
//     $('.results').html(`<h2>Check out these breweries!</h2>`);
//        $('.results').show(
//        `<img src="${responseJson.message[0]}" class="results-img" width="200" height="auto">`);
//     $('.results').removeClass('hidden'); 
//   }
//   }

// $('.js-search-form').submit(event => {
//     event.preventDefault();
//     $.get('/close-to-home?address=' + $('.js-query').val(), function(data) {
//         yelpData = data;
//         initMap(data);
//     });
//    $('.results-page').show();
//    $('#map').show();
// });


//user submits search
// $('.js-search-form').submit(event => {
//     event.preventDefault();
//     $.get('/close-to-home?address=' + $('.js-query').val(), function(data) {
//         yelpData = data;
//         initMap(data);
//     });
//    $('header').hide();
//    $('.landing-page').hide();
//    $('.results-btn').hide();
//    $('.results-page').show();
//    $('#map').show();
//    $('.sidebar').show();
// });

//view list of search results
// $('.results-btn').click(event => {
//     $('.sidebar').show();
//     $('.show-results').empty();
//     $('.results').show();
//     $('.results-btn').hide();
// });

//back to homepage for new search
// $('.new-search-btn').click(event => {
//     location.reload();
//   });


  //set up map with coordinates of search results and user input
// function createMap(lat, lng) {
//     return new google.maps.Map(
//         document.getElementById('map'), {
//             zoom: 11,
//       }
//     )   
//   }

  // I did not add this function because it seems to be irrelevant
//   function initMap(yelpResults) {
//     let userInput = $('.js-query').val();
//     let geocoder = new google.maps.Geocoder();
//     const map = createMap();
//     directionsService = new google.maps.DirectionsService();
//     directionsDisplay = new google.maps.DirectionsRenderer({
//         suppressMarkers: false
//     });
//     directionsDisplay.setMap(map);
//     directionsDisplay.setPanel(document.getElementById('show-results'));
//     codeAddress(geocoder, map, yelpResults);   
//   }

//set markers on map
// function updateMarker(lat, lng, map) {
//     marker = new google.maps.Marker(
//         {
//             position: {lat, lng},
//             map
//         }
//     );
//   }
  