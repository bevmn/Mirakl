// Make a get request to our api route that will return every art piece
$.get("/api/allGallery", function (data) {
    // For each art piece that our server sends us back
    for (var i = 0; i < data.length; i++) {
        
        // Create a parent div to hold art image
        var galleryImg = $("<img />");
        galleryImg.attr('src', data[i].image);
        galleryImg.addClass("divImg");  
        
        // Create a parent div to hold art
        var galleryDiv = $("<div>");
        galleryDiv.addClass("divStyle");

        // Add our art data to the gallery we just placed on the page
        galleryDiv.append(galleryImg);
        galleryDiv.append("<h5>" + data[i].item_name + "</h5>");
        galleryDiv.append("<p>Artist: " + data[i].artist_ + "</p>");
        galleryDiv.append("<p>Category: " + data[i].category_ + "</p>");
        galleryDiv.append("<p>Price: $" + data[i].price_ + "</p>");
        galleryDiv.append("<p>Quantity: " + data[i].stock_quantity_ + "</p>");

        // Append the galleryDiv to the gallery section
        $(".gallery-content").append(galleryDiv);
    }
});

// When user clicks add-btn
$("#add-btn").on("click", function (event) {
    event.preventDefault();

    // Make a newArt object
    var newArt = {
        image: $("#image_url").val().trim(),
        item_name: $("#image_title").val().trim(),
        category_: $("#category").val().trim(),
        artist_: $("#artist").val().trim(),
        price_: $("#price").val().trim(),
        stock_quantity_: $("#quantity").val().trim()
    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newArt)
        // On success, run the following code
        .then(function (data) {
            // Log the data we found
            console.log(data);
        });

    // Empty each input box by replacing the value with an empty string
    $("image_url").val("");
    $("#image_title").val("");
    $("#category").val("");
    $("#artist").val("");
    $("#price").val("");
    $("#quantity").val("");

});

