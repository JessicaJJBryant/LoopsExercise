// LOOPS EXERCISE

// 1
for (i=1; i<=7; i++) {
    console.log(i);
}

// 2
for (i=5; i<=25; i+=4) {
    console.log(i);
}

// 3a
const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
];
// 3b
for (wizard of wizards) {
    console.log(wizard);
}

// 4a
let harryPotterMovies = 0;
// 4b
while (harryPotterMovies <= 8) {
    console.log(harryPotterMovies);
    harryPotterMovies++;
} 
// 4c I do not think this is right, but I can't figure out another way. I tried to do a break in the above while loop, but I got into an infinite loop somehow and had to kill terminal.
console.log(harryPotterMovies-1);


// 5a
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff", 
    "Ravenclaw",
    "Slytherin"
];
// 5b
for (house of hogwartsHouses) {
    for (i of house) {
        console.log(i);
    }
}

// 6a
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];
// 6b I know this isn't a loop, but it gets the result.
console.log(quote.join(" "));
