let restaurants = [
    "taco bell",
    "Burger king",
    "Jimmy Johns",
    "Subway",
    "Jamba juice",
    "Mexican food"
]

let allRestaurants = restaurants.length;
let first = 0;
let change = $('.spin');

function changeRestaurant() {
    change.html(restaurants[first]);
    first = (first + 1) % allRestaurants;
}