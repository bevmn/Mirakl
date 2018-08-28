// When seller clicks submit button to add artwork
$("#addSubmit").on("click", function (event) {
    event.preventDefault();

    // Make a object
    var newItem = {
        image: $("#image_url").val().trim(),
        title: $("#image_title").val().trim(),
        category: $("#image_category").val().trim(),
        description: $("#image_description").val().trim(),
        price: $("#price").val().trim(),
        quantity: $("#quantity").val().trim(),
    };

    console.log(newItem);

    // Send an AJAX POST-request with jQuery
    $.post("/api/gallery", newItem)
        // On success, run the following code
        .then(function () {

            var row = $("<div>");
            row.append("<h3>" + newItem.title + "</h3>");
            row.append("<h4>" + newItem.category + "</h4>");
            row.append("<p>" + newItem.description + "</p>");
            row.append("<p>Price: " + newItem.price + "</p>");
            row.append("<p>Instock: " + newItem.quantity + "</p>");

            $(".gallery-content").prepend(row);

        });

    // Empty each input box by replacing the value with an empty string
    $("#img_url").val("");
    $("#image_title").val("");
    $("#image_category").val("");
    $("#image_description").val("");
    $("#price").val("");
    $("#quantity").val("");
});

// When the page loads, grab all of our data
$.get("/api/gallery", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.append("<h3>" + data[i].title + "</h3>");
            row.append("<h4>" + data[i].category + "</h4>");
            row.append("<p>" + data[i].description + "</p>");
            row.append("<p>Price: " + data[i].price + "</p>");
            row.append("<p>Instock: " + data[i].quantity + "</p>");

            $(".gallery-content").prepend(row);
        }

    }

});


// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var auth = $("#auth");
// var logIn = $("#logIn");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function (example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function () {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function (id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };


// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
