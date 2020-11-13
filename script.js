$(document).ready(function() {

	var list = [
		{
			cuisine: 'American',
			country: 'us',
			countryInitials: 'USA'
		},
		{
			cuisine: 'British',
			country: 'uk',
			countryInitials: 'GB'
		},
		{
			cuisine: 'Canadian',
			country: 'cn',
			countryInitials: 'CAN'
		},
		{
			cuisine: 'Chinese',
			country: 'cn',
			countryInitials: 'CHI'
		},
		{
			cuisine: 'Dutch',
			country: 'be',
			countryInitials: 'BEL'
		},
		{
			cuisine: 'Egyptian',
			country: 'eg',
			countryInitials: 'EGY'
		},
		{
			cuisine: 'French',
			country: 'fr',
			countryInitials: 'FRE'
		},
		{
			cuisine: 'Greek',
			country: 'gr',
			countryInitials: 'GRE'
		},
		{
			cuisine: 'Indian',
			country: 'in',
			countryInitials: 'IND'
		},
		{
			cuisine: 'Irish',
			country: 'ie',
			countryInitials: 'IRI'
		},
		{
			cuisine: 'Italian',
			country: 'it',
			countryInitials: 'ITA'
		},
		{
			cuisine: 'Jamaican',
			country: 'jm',
			countryInitials: 'JAM'
		},
		{
			cuisine: 'Japanese',
			country: 'jp',
			countryInitials: 'JAP'
		},
		{
			cuisine: 'Kenyan',
			country: 'ke',
			countryInitials: 'KEN'
		},
		{
			cuisine: 'Malaysian',
			country: 'my',
			countryInitials: 'MAL'
		},
		{
			cuisine: 'Mexican',
			country: 'mx',
			countryInitials: 'MEX'
		},
		{
			cuisine: 'Moroccan',
			country: 'ma',
			countryInitials: 'MOR'
		},
		{
			cuisine: 'Polish',
			country: 'pl',
			countryInitials: 'POL'
		},
		{
			cuisine: 'Russian',
			country: 'ru',
			countryInitials: 'RUS'
		},
		{
			cuisine: 'Spanish',
			country: 'es',
			countryInitials: 'SPA'
		},
		{
			cuisine: 'Thai',
			country: 'th',
			countryInitials: 'THA'
		},
		{
			cuisine: 'Tunisian',
			country: 'tn',
			countryInitials: 'TUN'
		},
		{
			cuisine: 'Turkish',
			country: 'tr',
			countryInitials: 'TUR'
		},
		{
			cuisine: 'Vietnamese',
			country: 'vn',
			countryInitials: 'VIE'
		}
   ];


   var rowCount = Math.ceil(list.length/4)
   var cardCount = 0;
   var cardContent = $("#cardContainer")

var k = 0
for (var i = 0; i < rowCount; i++) {
   var htmlRow = $("<div class='row'></div>");
   for (var j = 0; j < 4; j++) {
      
	  htmlRow.append('<div class="col s12 m6 l3"> <div class="card" id="card'+cardCount+'"> <div class="card-image"> <img src="assets/logo.png"> <span class="card-title countryCardTitle">'+list[cardCount].cuisine+'</span> <a href="" class="waves-effect waves-light btn-floating halfway-fab indigo modal-trigger pulse pink" href="#modal1" button data-target="modal1" class="btn modal-trigger"> <i class="material-icons" country-id='+ list[k].countryInitials+' >favorite</i> </a></div> <div class="card-content"><p>This is where we can add some fun facts about the countries into this section </p> </div> </div>');
     k++
     cardCount++
   }

   cardContent.append(htmlRow)
}

 var modalContent = $('.modal-content');
 $('modalInfo');

 //   The Function to Start the Modal

 $('.modal').modal({
   onCloseStart:function(){
      modalContent.empty()
   },
   opacity	: .65
});

 

   $('.material-icons').click(function (e) {
      
      var countryID = $(this).attr('country-id');
      console.log(e)
         for (var i = 0; countryID == list[i].countryInitials ; i++ ){
            console.log(e)
            console.log(i)
            if (countryID == list[i].countryInitials){
               var selectedCountry = list[i].country
               //console.log(selectedCountry)
               var selectedCuisine = list[i].cuisine
               //console.log(selectedCuisine)
            } 
              
          }
          console.log(countryID)
          runTheCusine(selectedCuisine,selectedCountry);    
  });
  //if you hit the close button or if you click outside of the modal it clears the contents of the modal

  function runTheCusine(cuisineCode,countryCode){

                   // Here we are building the URL we need to query the database
                     console.log(cuisineCode)
                     console.log(countryCode)
                     var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + cuisineCode
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
                    modalContent.append("<div class='carousel'></div>")
                  // Here we are creatign the objects on the Modal for the User to select from.
                  for (var i = 0 ; i < numberOfMeals; i++){
                     
                    var mealID = response.meals[i].idMeal
                     var mealName = response.meals[i].strMeal

                     $(".carousel").append("<a class='carousel-item' href='#"+i+"!'  meal-Name='" + mealName + "' meal-ID='" + mealID + "'>" + "<img src='" + response.meals[i].strMealThumb + "'  class='foodImg'  >" +"</a>")
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
                        
                        modalContent.append("<img src='" + response.meals[0].strMealThumb + "' class='foodIcon col s3'>" )
                        var ingredientsList = $("<ol class='Ingredient-list'>"+"<h4>Ingredients</h4>"+"</ol>");
                        var mealsCount = response.meals.length;

                           if (mealsCount == 0){
                              
                           }else{
                        var ingredientsarray = "strIngredient"
                        var i = 1
                        while (response["meals"][0][ingredientsarray+i]){
                           ingredientsList.append("<li>"+response.meals[0][ingredientsarray+i] + "</li>");
                           i++
                        }
                     }
                        modalContent.append(ingredientsList);
                        modalContent.append("<h4>Instructions</h4>"+"<p>" + response.meals[0].strInstructions + "</p>" )

                      })

   }

})
