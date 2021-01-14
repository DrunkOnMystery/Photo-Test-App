//establish required global variables

var searches = [];
var search = $("autocomplete-input").val();


$(document).ready(function () {

//Set onclick actions for search
    $("#searchButton").on("click", function(event) {
        event.preventDefault();

    var imageSearch = $("#autocomplete-input").val().trim();
    console.log(imageSearch);
    search(imageSearch);
    }
    )
 

function search(search) {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://www.flickr.com/services/rest/" + search + "?page=1",
        "method": "GET",
        "format": "json",
        "api-key": "d924a2af852b9031787648fee13f8fb8",
        "safe_search": "3",
        "per_page": "20",
        "page": "1",
        }
    }

$.ajax(settings).done(function(response) {
    console.log(response);

    localStorage.setItem("storedSearch", response);

for (i = 0; i < 20; i++) {

//Creating divs for the cards to be put into
    var zipCodeDiv = $("<div>");
    zipCodeDiv.addClass("card-container");
    var zipCodeCardDiv = $("<div>");
    zipCodeCardDiv.addClass("card");

//Creating temporary variables for the application
    var name = response.result.data[i].restaurant_name;
    var address = response.result.data[i].address.formatted;
    var phone = response.result.data[i].restaurant_phone;
    var price = response.result.data[i].price_range;
    var foodType = response.result.data[i].cuisines;

    // console.log(name);
    // console.log(address);
    // console.log(phone);
    // console.log(price);
    // console.log(foodType);

    var nameOutput = $("<h5>").text(name);
    nameOutput.addClass("card-title");
    var addressOut = $("<p>").text("Address: " + address);
    addressOut.addClass("cart-text");
    var phoneOut = $("<p>").text("Phone Number: " + phone);
    phoneOut.addClass("cart-text");
    var priceOut = $("<p>").text("Price Level: " + price);
    priceOut.addClass("cart-text");
    var foodTypeOut = $("<p>").text("Food Style: " + foodType);
    foodTypeOut.addClass("cart-text");

//Append new outputs to created divs

    zipCodeDiv.append(nameOutput);
    zipCodeDiv.append(addressOut);
    zipCodeDiv.append(phoneOut);
    zipCodeDiv.append(priceOut);
    zipCodeDiv.append(foodTypeOut);

    zipCodeCardDiv.append(zipCodeDiv);

    $("#foodSearchResults").prepend(zipCodeCardDiv);

}
})}})