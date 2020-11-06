$(document).ready(function() {

    // Here we are building the URL we need to query the database
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Greek" 
    // Here we run our AJAX call to the OpenWeatherMap API
   $.ajax({
     url: queryURL,
     method: "GET"
  })
     // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
       // Log the resulting object
       console.log(response.meals);

     });
});