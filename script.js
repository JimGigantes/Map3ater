$(document).ready(function() {
   var cuisine = ["American","British","Canadian", "Chinese","Dutch","Egyptian","French","Greek","Indian","Irish","Italian","Jamaican", "Japanese", "Kenyan", "Malaysian", "Mexican", "Moroccan", "Polish", "Russian", "Spanish", "Thai", "Tunisian", "Turkish", "Vietnamese"];
   var country = ["us", "uk","ca","cn","be","eg","fr","gr","in","ie","it","jm","jp","ke","my","mx","ma","pl","ru","es","th","tn","tr","vn"];
   var countryInitials = ["USA","GB","CAN","CHI","BEL","EGY","FRE","GRE","IND","IRI","ITA","JAM","JAP","KEN","MAL","MEX","MOR","POL","RUS","SPA","THA","TUN","TUR","VIE"];
   var list = [
      {
         cruise: "American",
         country:"us",
         countryInitials: "USA"
      },
      {
         cruise: "British",
         country:"uk",
         countryInitials: "GB"
      }
   ]
   var modalContent = $(".modal-content")
  
        
   
  

   $('.modal').modal();

   $('.material-icons').click(function () {
      var countryID = $(this).attr('country-ID');
         //console.log(countryID)
      for (var i = 0; countryID == countryInitials[i] ; i++ ){
         if (countryID == countryInitials[i]){
         var selectedCountry = country[i]
         var selectedCuisine = cuisine[i]
         }
      }
      runTheCusine(selectedCuisine,selectedCountry)
  });


 function runTheCusine(cusineCode,countryCode){

                   // Here we are building the URL we need to query the database
                  
                     var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + cusineCode
                  // Here we run our AJAX call to the OpenWeatherMap API
                     $.ajax({
                        url: queryURL,
                        method: "GET"
                      })
                  // We store all of the retrieved data inside of an object called "response"
                     .then(function(response) {
                  // Log the resulting object
                     console.log(response);
                    var numberOfMeals = response.meals.length
                  
                    modalContent.append("<img src='https://flagcdn.com/32x24/" + countryCode  +".png' width='50rem'  height='50rem' id='icon'>")
                  // Here we are creatign the objects on the Modal for the User to select from.
                  for (var i = 0 ; i < numberOfMeals; i++){
                     
                    var mealID = response.meals[i].idMeal
                     var mealName = response.meals[i].strMeal
                    //modalContent.append("<a href><img src="+response.meals[i].strMealThumb + " id='icon' class='foodIcon' meal-Name='" + mealName + "' meal-ID='" + mealID + "' > </i>")
                    //modalContent.append("<a href>" + response.meals[i].strMeal + "</a>")
                     //var listItemsForCarousel = $('a')
                    
                     //listItemsForCarousel.addClass("carousel-item")
                     //listItemsForCarousel.append("<img src="+response.meals[i].strMealThumb + " id='icon' class='foodIcon' meal-Name='" + mealName + "' meal-ID='" + mealID + "' >")
                     $(".carousel-slider").append("<a class='carousel-item' href='#"+i+"!'  meal-Name='" + mealName + "' meal-ID='" + mealID + "'>" + "<img src='" + response.meals[i].strMealThumb + "'  class='foodIcon'  >" +"</a>")
                     $('.carousel').carousel()
                  }
                  $('.carousel-item').click(function () {
                     var countryMealID = $(this).attr('meal-ID');
                     var countryMealName = $(this).attr('meal-Name');

                     modalContent.empty()
                     console.log(countryMealID);
                        //we will need to append the passport here.
                       

                     runTheMeal(countryMealID)
                  });



                  

                });
               }

                   function runTheMeal (countryMeal){
                   //Here were passing the selection from the user
                   queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+ countryMeal
                  
                   $.ajax({
                      url: queryURL,
                      method: "GET"
                   })
                      // We store all of the retrieved data inside of an object called "response"
                     .then(function(response) {
                        // Log the resulting object
                        console.log(response);
                  
                       //Here we update the modal so that itwe remove all of the selections and pass the
                       // user information about the meal that they seleced.

                

                     })





   }

   //change the country code
 //$("#USA").on("click", function() {
 //  cuisineCode = cusine[0]
 //  countryCode = country[0]
 //  runTheWeather(cusineCode,countryCode)
 // });
 // $(".pulse").on("click",".material-icons", function(event) {
//     event.preventDefault()
  //  console.log(this)
   
   
   //var countryAttVal = $(this).


    //cuisineCode = cusine[0]
    //countryCode = country[0]
  // runTheWeather(latestCity)
// });
})
