$(document).ready(function() {
	var cuisine = [
		'American',
		'British',
		'Canadian',
		'Chinese',
		'Dutch',
		'Egyptian',
		'French',
		'Greek',
		'Indian',
		'Irish',
		'Italian',
		'Jamaican',
		'Japanese',
		'Kenyan',
		'Malaysian',
		'Mexican',
		'Moroccan',
		'Polish',
		'Russian',
		'Spanish',
		'Thai',
		'Tunisian',
		'Turkish',
		'Vietnamese'
	];
	var country = [
		'us',
		'uk',
		'ca',
		'cn',
		'be',
		'eg',
		'fr',
		'gr',
		'in',
		'ie',
		'it',
		'jm',
		'jp',
		'ke',
		'my',
		'mx',
		'ma',
		'pl',
		'ru',
		'es',
		'th',
		'tn',
		'tr',
		'vn'
	];
	var countryInitials = [
		'USA',
		'GB',
		'CAN',
		'CHI',
		'BEL',
		'EGY',
		'FRE',
		'GRE',
		'IND',
		'IRI',
		'ITA',
		'JAM',
		'JAP',
		'KEN',
		'MAL',
		'MEX',
		'MOR',
		'POL',
		'RUS',
		'SPA',
		'THA',
		'TUN',
		'TUR',
		'VIE'
	];
	var list = [
		{
			cruise: 'American',
			country: 'us',
			countryInitials: 'USA'
		},
		{
			cruise: 'British',
			country: 'uk',
			countryInitials: 'GB'
		},
		{
			cruise: 'Canadian',
			country: 'cn',
			countryInitials: 'CAN'
		},
		{
			cruise: 'Chinese',
			country: 'cn',
			countryInitials: 'CHI'
		},
		{
			cruise: 'Dutch',
			country: 'be',
			countryInitials: 'BEL'
		},
		{
			cruise: 'Egyptian',
			country: 'eg',
			countryInitials: 'EGY'
		},
		{
			cruise: 'French',
			country: 'fr',
			countryInitials: 'FRE'
		},
		{
			cruise: 'Greek',
			country: 'gr',
			countryInitials: 'GRE'
		},
		{
			cruise: 'Indian',
			country: 'in',
			countryInitials: 'IND'
		},
		{
			cruise: 'Irish',
			country: 'ie',
			countryInitials: 'IRI'
		},
		{
			cruise: 'Italian',
			country: 'it',
			countryInitials: 'ITA'
		},
		{
			cruise: 'Jamaican',
			country: 'jm',
			countryInitials: 'JAM'
		},
		{
			cruise: 'Japanese',
			country: 'jp',
			countryInitials: 'JAP'
		},
		{
			cruise: 'Kenyan',
			country: 'ke',
			countryInitials: 'KEN'
		},
		{
			cruise: 'Malaysian',
			country: 'my',
			countryInitials: 'MAL'
		},
		{
			cruise: 'Mexican',
			country: 'mx',
			countryInitials: 'MEX'
		},
		{
			cruise: 'Moroccan',
			country: 'ma',
			countryInitials: 'MOR'
		},
		{
			cruise: 'Polish',
			country: 'pl',
			countryInitials: 'POL'
		},
		{
			cruise: 'Russian',
			country: 'ru',
			countryInitials: 'RUS'
		},
		{
			cruise: 'Spanish',
			country: 'es',
			countryInitials: 'SPA'
		},
		{
			cruise: 'Thai',
			country: 'th',
			countryInitials: 'THA'
		},
		{
			cruise: 'Tunisian',
			country: 'tn',
			countryInitials: 'TUN'
		},
		{
			cruise: 'Turkish',
			country: 'tr',
			countryInitials: 'TUR'
		},
		{
			cruise: 'Vietnamese',
			country: 'vn',
			countryInitials: 'VIE'
		}
   ];


   var rowCount = Math.ceil(list.length/4)
   var cardCount = 0;
   var cardContent = $("#cardContainer")


for (var i = 0; i < rowCount; i++) {
   var htmlRow = $("<div class='row'></div>");
   for (var j = 0; j < 4; j++) {
	  htmlRow.append('<div class="col s12 m6 l3"> <div class="card" id="card'+cardCount+'"> <div class="card-image"> <img src="assets/logo.png"> <span class="card-title countryCardTitle">'+list[cardCount].cruise+'</span> <a href="" class="waves-effect waves-light btn-floating halfway-fab indigo modal-trigger pulse pink" href="#modal1" button data-target="modal1" class="btn modal-trigger"> <i class="material-icons" country-ID="USA">favorite</i> </a></div> <div class="card-content"><p>This is where we can add some fun facts about the countries into this section </p> </div> </div>');
	  cardCount++
   }

   cardContent.append(htmlRow)
}

 var modalContent = $('.modal-content');
 $('modalInfo');

 //   The Function to Start the Modal
 $(document).ready(function() {
	 $('.modal').modal();

	 $('#modal').on('click', function() {
    })
 });

 

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
  //if you hit the close button or if you click outside of the modal it clears the contents of the modal




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
             


                       //Here we update the modal so that it we remove all of the selections and pass the
                       // user information about the meal that they seleced.

                     })

   }

})
