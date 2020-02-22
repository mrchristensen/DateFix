window.onload = function() {
    setUp();
}

function setUp() {
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