window.onload = function() {
    setUp();
}

function setUp() {
<<<<<<< HEAD
    // FIXME - get ID
    document.getElementById("").addEventListener("click", function(event) {
        event.preventDefault();

        // FIXME - change is so that we get a desert and/or manin course
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log(json);
            });
    });
}
=======
	// FIXME - get ID
	document.getElementById("get-meal-button").addEventListener("click", function(event) {
		event.preventDefault();

		// FIXME - change is so that we get a desert and/or manin course
		const url = "https://www.themealdb.com/api/json/v1/1/random.php";
		fetch(url) 
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				console.log(json);
				let results = "";
				results += "<h2>" + json.meals[0].strMeal + "</h2>";
				results += "<h4>" + json.meals[0].strCategory + " 	" 
						          + json.meals[0].strArea + "</h4>";
				// let thumbnail = ;
				// thumbnail = thumbnail.substring(0, thumbnail.length - 1);
				results += "<img style=\"height: 256px;\" src=\"" 
						+ json.meals[0].strMealThumb + "\"/>"; 

				document.getElementById("meal").innerHTML = results;
			});
	});
}


// meal and dessert
>>>>>>> 6a5089cace1184fcc8c49f65877d454b27000b70
