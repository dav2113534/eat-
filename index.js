let restaurants = [
    "taco bell",
    "Burger king",
    "Jimmy Johns",
    "Subway",
    "Jamba juice",
    "Mexican food"
]
//Lets us access restaurants in array
let allRestaurants = restaurants.length;

let first = 0;
let change = $('.spin');

function changeRestaurant() {
    change.html(restaurants[first]);
    first = (first + 1) % allRestaurants;
}

function makeItSpin() {
    let spins = setInterval(changeRestaurant, 120);
};

$('.spin').hover(function () {
    makeItSpin();
}, function () {
    clearInterval(spins);
})

function hoverEfftect() {
    $('.spin').hover(function () {
        for (let i = 0; i > restaurants.length; i++)
            $('.spin').html(restaurants[i]);
    });
}