//establish required global variables

var searches = [];
var search = $("autocomplete-input").val();


$(document).ready(function () {

//Set onclick actions for search
    $("#searchButton").on("click", function(event) {
        event.preventDefault();

    var imageSearch = $("#searchInput").val().trim();
    console.log(imageSearch);
    search(imageSearch);
    }
    )
 

function search(search) {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.unsplash.com/search/photos?per_page=20&query=" + search + "&client_id=a8ApBN_ZhrUaLUCaIgDZyCOHzxRbQ1wg0kyb7JBgF_Y",
        "method": "GET",
        "content_filter": "low",
        "per_page": "10",
        "page": "2",
    }

$.ajax(settings).done(function(data) {
    $("#searchResults").empty();
    console.log(data);

//     localStorage.setItem("storedSearch", response);

for (i = 0; i < 20; i++) {

//Creating divs for the cards to be put into
    var imageDiv = $("<div>");
    imageDiv.addClass("card-container");
    var imageCardDiv = $("<div>");
    imageCardDiv.addClass("card");
    var img = $("<img>");

//Creating temporary variables for the application
    var imageURL = data.results[i].urls.regular;
    console.log(imageURL);
    $(img).attr("src", imageURL);

// //Append new outputs to created divs
    imageDiv.append(img);
//     zipCodeDiv.append(addressOut);
//     zipCodeDiv.append(phoneOut);
//     zipCodeDiv.append(priceOut);
//     zipCodeDiv.append(foodTypeOut);

    imageCardDiv.append(imageDiv);

    $("#searchResults").prepend(imageCardDiv);

// }
}})}})