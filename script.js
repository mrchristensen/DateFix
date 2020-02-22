window.onload = function() {
	setUp();
}

function formatMeal(json) {
	let obj = json.meals[0];
	let results = "";

	if(obj.strCategory != "Dessert") {
		results += "<h2>Dinner - " 
	}
	else {
		results += "<h2>Dessert - "
	}

	results += obj.strMeal + "</h2>"
	        + "<h4>" + obj.strArea + "</h4>"
	        + "<img style=\"height: 256px;\" src=\"" 
			+ obj.strMealThumb + "\"/>"
	        + "<h4>Ingredients</h4>"
	        + "<ul>";
	for(var i = 1; i <= 20; i++) {
		let currentItem = "strIngredient" + i;
		let measure = "strMeasure" + i;
		if(obj[currentItem] == "" || obj[currentItem] == null || obj[currentItem] == " ") {
			break;
		}
		results += "<li>" + obj[measure] + " " + obj[currentItem] + "</li>";
	}
	results += "</ul>"
			+ "<h4>Instructions</h4>"
			+ "<p>" + obj.strInstructions + "</p>";

	if(obj.strYoutube != null) {
		results += "<p>See more instructions <a href=\"" + obj.strYoutube 
		        + "\">here</a></p>";
	}
	if(obj.strSource != null) {
		results += "<p>Set the full recipe <a href=\"" + obj.strSource 
		        + "\">here</a></p>";
	}

	return results;
}

function setUp() {
	document.getElementById("get-meal-button").addEventListener("click", function(event) {
		event.preventDefault();
		const url = "https://www.themealdb.com/api/json/v1/1/random.php";

		var fetchURL = function(isDessert) {
			fetch(url) 
				.then(function(response) {
					return response.json();
				}).then(function(json) {
					if((!isDessert && json.meals[0].strCategory != "Dessert") ||
						(isDessert && json.meals[0].strCategory == "Dessert")) {
						console.log(json);

						document.getElementById(isDessert ? "dessert" : "meal")
							.innerHTML = formatMeal(json);
					}
					else { //not a valid fetch
						fetchURL(isDessert);
					}
				});
		}

		fetchURL(false);
		fetchURL(true);
	});
}