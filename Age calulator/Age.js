let age = prompt (("what is your age?"));
let days = age * 365.25;
alert ("You have lived " + days + "days");

let weeks = age * 52;
alert ("You have lived " + weeks + "weeks");

let hours = age * 8760;
alert ("You have lived " + hours + "hours");

let seconds = age * 3153600;
alert ("You have lived " + seconds + "seconds");
alert ("That's to say you have lived " + days + "days," + " " + weeks + "weeks," + " " + hours + "hours," + " " + seconds + "seconds altogether" );

let currentAge = age;
let nextAge = 1 + currentAge;
alert ("You will be " + nextAge + " in Hundred year");
