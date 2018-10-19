// Create original array
const deckQuestion = [
    ["This is first question", "This is first answer"],
    ["This is 2 question", "This is 2 answer"],
    ["This is 3 question", "This is 3 answer"],
    ["This is 4 question", "This is 4 answer"],
    ["This is 5 question", "This is 5 answer"],
    ["This is 6 question", "This is 6 answer"],
    ["This is 7 question", "This is 7 answer"],
    ["This is third question", "This is third answer"]
];

// Create emty array to store
let deckEmpty = [];

// Take an element from deckQuestion array
let randomInnerArray = deckQuestion[Math.floor(Math.random() * (deckQuestion.length))];

// Push randomInnerArray to deckEmpty
deckEmpty.push(randomInnerArray);

// When click question button, this function will show first element in DeckEmpty array
document.getElementById("btn-question").addEventListener("click", function () {
    document.getElementById("insert-question").innerHTML = deckEmpty[0][0];
});

// When click question button, this function will show second element in DeckEmpty array
document.getElementById("btn-answer").addEventListener("click", function () {
    document.getElementById("insert-answer").innerHTML = deckEmpty[0][1];
});


document.getElementById("clear-button").addEventListener("click", function(deckEmpty) {
    deckEmpty.length = 0;
    document.getElementById("insert-question").innerHTML = "";
    document.getElementById("insert-answer").innerHTML = "";
 });