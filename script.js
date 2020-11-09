$(document).ready(function() {
   var cuisine = ["American","British","Canadian", "Chinese","Dutch","Egyptian","French","Greek","Indian","Irish","Italian","Jamaican", "Japanese", "Kenyan", "Malaysian", "Mexican", "Moroccan", "Polish", "Russian", "Spanish", "Thai", "Tunisian", "Turkish", "Vietnamese"];
   var country = ["US", "GB","CA","CN","NL","EG","FR","GR","IN", "IE","IT","JM","JP","KE","MY","MX","MA","PL","RU","ES","TH","TN","TR","VN"]
   var countryInitials= ["USA","GB","CAN","CHI","BEL","EGY","FRE","GRE","IND","IRI","ITA","JAM","JAP","KEN","MAL","MEX","MOR","POL",]

  // function runTheMeal(cusineCode,countryCode){
               // Here we are building the URL we need to query the database
               //var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a="+ cusineCode
               var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=greek"
               // Here we run our AJAX call to the OpenWeatherMap API
              $.ajax({
                url: queryURL,
                method: "GET"
             })
                // We store all of the retrieved data inside of an object called "response"
               .then(function(response) {
                  // Log the resulting object
                  console.log(response);
                  // Here we are creatign the objusect on the Modal for the User to select from.




                  //Here were passing the selection from the user
                  queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
                  
                  $.ajax({
                     url: queryURL,
                     method: "GET"
                  })
                     // We store all of the retrieved data inside of an object called "response"
                    .then(function(response) {
                       // Log the resulting object
                       console.log(response);
                     
                       //
                       //Here we update the modal so that itwe remove all of the selections and pass the
                       // user information about the meal that they seleced.




                  
                    })

                });

   //}

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
//   $("#UK").on("click", function() {
//    cuisineCode = cusine[1]
//    countryCode = country[1]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#CAN").on("click", function() {
//    cuisineCode = cusine[2]
//    countryCode = country[2]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#CHI").on("click", function() {
//    cuisineCode = cusine[3]
//    countryCode = country[3]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#BEL").on("click", function() {
//    cuisineCode = cusine[4]
//    countryCode = country[4]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#EGY").on("click", function() {
//    cuisineCode = cusine[5]
//    countryCode = country[5]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#FRE").on("click", function() {
//    cuisineCode = cusine[6]
//    countryCode = country[6]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#GRE").on("click", function() {
//    cuisineCode = cusine[7]
//    countryCode = country[7]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#IND").on("click", function() {
//    cuisineCode = cusine[8]
//    countryCode = country[8]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#IRI").on("click", function() {
//    cuisineCode = cusine[9]
//    countryCode = country[9]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#ITA").on("click", function() {
//    cuisineCode = cusine[10]
//    countryCode = country[10]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#JAM").on("click", function() {
//    cuisineCode = cusine[11]
//    countryCode = country[11]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#JAP").on("click", function() {
//    cuisineCode = cusine[12]
//    countryCode = country[12]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#KEN").on("click", function() {
//    cuisineCode = cusine[13]
//    countryCode = country[13]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#MAL").on("click", function() {
//    cuisineCode = cusine[14]
//    countryCode = country[14]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#MEX").on("click", function() {
//    cuisineCode = cusine[15]
//    countryCode = country[15]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#MOR").on("click", function() {
//    cuisineCode = cusine[16]
//    countryCode = country[16]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#POL").on("click", function() {
//    cuisineCode = cusine[17]
//    countryCode = country[17]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#RUS").on("click", function() {
//    cuisineCode = cusine[18]
//    countryCode = country[18]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#SPA").on("click", function() {
//    cuisineCode = cusine[19]
//    countryCode = country[19]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#THA").on("click", function() {
//    cuisineCode = cusine[20]
//    countryCode = country[20]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#YUN").on("click", function() {
//    cuisineCode = cusine[21]
//    countryCode = country[21]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#TUR").on("click", function() {
//    cuisineCode = cusine[22]
//    countryCode = country[22]
//    runTheWeather(cusineCode,countryCode)
//   });
//   $("#VIE").on("click", function() {
//    cuisineCode = cusine[23]
//    countryCode = country[23]
//    runTheWeather(cusineCode,countryCode)
//   });

  








 });
