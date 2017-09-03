var restaurants = [
        "taco bell",
        "Burger king",
        "Jimmy Johns",
        "Subway",
        "Jamba juice",
        "Mexican food"
    ],
    /*This will allow me to access restaurants and position them*/
    allRestaurants = restaurants.length,
    firstChoice = 0,
    change = $('.spin'),
    //goes thru all restaurants
    changeChoice = function () {
        change.html(restaurants[firstChoice]);
        firstChoice = (firstChoice + 1) % allRestaurants;
    }

function spinner() {
    ohYeah = setInterval(changeChoice, 120); //must match css animation
};

$('.spin').hover(function () {
    spinner();
}, function () {
    clearInterval(ohYeah);
});

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}