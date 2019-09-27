function populateMapCafe(place, details) {

    let htmlCafePage = ``;
    htmlCafePage += `<div class="cafe-img" style="background-image: url(${details.photo})"></div>`;
    htmlCafePage += `<span class="text-container">`;
    htmlCafePage += `<h2>${place.name}ƒ</h2>`;
    if (details.address == "") { 
        console.log(details.address);
    } else {
        htmlCafePage += `<p id="address">${details.address}</p>`;
    }
    if (details.phone == "") {
        console.log(details.phone);
    } else {
        htmlCafePage += `<p>P:   ${details.phone}</p>`;
    }
    if (details.rating == "") {
        console.log(details.rating);
    } else {
        htmlCafePage += `<p>Google Rating: ${details.rating}</p>`;
    }
    if (details.website == "") {
        console.log(details.website);
    } else {
        htmlCafePage += `<p><a href="${details.website}" target="_blank">Website</a></p>`;
    }
    htmlCafePage += `</span>`;
    htmlCafePage += `</div>`;

    //Appends to Cafe Info Section
    $("#info-container").html(htmlCafePage);

}

//////////////////////////////////////////////////////////////////////////////
//CSS Related Listeners

function displayCafePage() {
    $('#cafe-info-page').show();

    
    $('#feat-button').show();
    $('#hFeat').hide();
}


function renderCafePage(place, details) {
    populateMapCafe(place, details);
    displayCafePage();
}



