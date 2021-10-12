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
while (harryPotterMovies < 8) {
    harryPotterMovies++;
} 
// 4c This is now correct. I had to change the <= 8 to < 8 and take out the console.log from the while loop.
console.log(harryPotterMovies);


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
// console.log(quote.join(" "));
// Maianne's way with the loop:
// let sentence = "";
// while (quote !== sentence) {
//     console.log(quote.join(" "));
//     break;
// }
// Matt's way with the FOR OF loop:
let sentence = "";
for (word of quote) {
    sentence += word + " ";
    // OR
    // sentence += `${word} `; This is better because the template literal allows us to add the space right after each word.
}
// we need to use trim to remove the extra space from the end
// sentence = sentence.trim();
// console.log(sentence);
// OR
console.log(sentence.trim());

// Matt said we could also do it this way USING A FOR LOOP:
// let sentence = "";
// for (i = 0; i < quote.length; i++) {
    // sentence += `${quote[i]} `;
// }
// console.log(sentence.trim());
