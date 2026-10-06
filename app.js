let age = 25;
let is_subscribed = true;
let user_points = 120;

if ((is_subscribed === true && age > 18) || user_points >= 100) {
    console.log("The user qualifies for the special message!");
}

if (age < 18 && is_subscribed === false) {
    console.log("The user is younger than 18 and is not subscribed");
} else if (age >= 18 && is_subscribed === false) {
    console.log("The user is 18 or older and is not subscribed");
} else if (age < 18 && is_subscribed === true) {
    console.log("The user is younger than 18 and is subscribed");
} else {
    console.log("The user is 18 or older and is subscribed");
}