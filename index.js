var restaurants = [
        "taco bell",
        "Burger king",
        "Jimmy Johns",
        "Subway",
        "Jamba juice",
        "Mexican food"
    ],

    allRestaurants = restaurants.length,
    firstChoice = 0,
    change = $('.spin'),
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