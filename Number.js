/*
Detta är ett spel gjort av Ramin, Alexander och Assid. Vi fick inspirationen av spelet på https://www.abcya.com/games/guess_the_number.
Det vi lade till i detta projektet är winstreaks. Det är fritt fram att använda våran kod till vad du vill. Vi står inte för problem som uppstår med koden.
Projektet är skrivet i javascript med hjälp av VisualStudio Code.
För att spela spelet ehöver du ladda ned Node genom deras hemsida https://nodejs.org/en/. Du börjar med att skriva node number.js.
Spelet frågar dig ifall du vill starta. Sedan väljer man svårhetsgrad på spelet, därefter gissar du på ett slumpmässigt nummer beroende på svårhetsgraden du tidigare valt.
Om du vinner eller förlorar kommer du bli frågad ifall du vill spela igen eller inte. Väljer du att spela igen så kommer du att få välja svårhetsgrad igen.
*/

const prompt = require("prompt-sync") ();
let player = { health: 5, winStreaks: 0 };
const congrats = 
"\n_______  _____  __   _  ______  ______ _______ _______ _     _        _______ _______ _____  _____  __   _ _______ | "+ 
"\n|       |     | | \\  | |  ____ |_____/ |_____|    |    |     | |      |_____|    |      |   |     | | \\  | |______ | " +
"\n|_____  |_____| |  \\_| |_____| |    \\_ |     |    |    |_____| |_____ |     |    |    __|__ |_____| |  \\_| ______| . ";

const gameOver = 
"\n  ________  ________  _____ ______   _______           ________  ___      ___ _______   ________     " +
"\n |\\   ____\\|\\   __  \\|\\   _ \\  _   \\|\\  ___ \\         |\\   __  \\|\\  \\    /  /|\\  ___ \\ |\\   __  \\    " +
"\n \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\\\\\__\\ \\  \\ \\   __/|        \\ \\  \\|\\  \\ \\  \\  /  / | \\   __/|\\ \\  \\|\\  \\   " +
"\n  \\ \\  \\  __\\ \\   __  \\ \\  \\\\|__| \\  \\ \\  \\_|/__       \\ \\  \\\\\\  \\ \\  \\/  / / \\ \\  \\_|/_\\ \\   _  _\\  " +
"\n   \\ \\  \\|\\  \\ \\  \\ \\  \\ \\  \\    \\ \\  \\ \\  \\_|\\ \\       \\ \\  \\\\\\  \\ \\    / /   \\ \\  \\_|\\ \\ \\  \\\\  \\| " +
"\n    \\ \\_______\\ \\__\\ \\__\\ \\__\\    \\ \\__\\ \\_______\\       \\\ \\_______\\ \\__/ /     \\ \\_______\\ \\__\\\\ _\\ " +
"\n     \\|_______|\\|__|\\|__|\\|__|     \\|__|\\|_______|        \\|_______|\\|__|/       \\|_______|\\|__|\\|__| ";

console.log("\nGuess the number to win the game!\n");

function gameMode(numberRange, instructions) {
    let randomGeneratedNumber = Math.round(Math.ceil(Math.random() * 10));
    console.log(instructions);
           
    while (player.health !== 0 && playerGuess !== randomGeneratedNumber) {
        var playerGuess = parseInt(prompt("> "));
   
        if (playerGuess === randomGeneratedNumber) {
            player.winStreaks++;
            console.log(congrats, "\nYou currently have", player.winStreaks, "winstreaks!");
        }else if (playerGuess > randomGeneratedNumber) {
            console.log("Less than", playerGuess + "\n");
            player.health--;
            console.log(player.health, "hearts remaining");
        }else if (playerGuess < randomGeneratedNumber) {
            console.log("Greater than", playerGuess + "\n");
            player.health--;
            console.log(player.health, "hearts remaining");
        };
        if (player.health === 0) {console.log(gameOver, "\n\nThe random number was", randomGeneratedNumber)};
    };
};

const startGame = prompt("Press the enter key on your keyboard to play the game! ");

do {
    if (startGame === "") {
        player.health = 5;
        console.log("\nChoose the game difficulty (Easy, Medium, Hard)");
        const gameDifficulty = prompt("> ");

        if (gameDifficulty === "Easy" || gameDifficulty === "easy") { gameMode(10, "\nInput a number between 1-10"); }
        else if (gameDifficulty === "Medium" || gameDifficulty === "medium") { gameMode(100, "\nInput a number between 1-100"); }
        else if (gameDifficulty === "Hard" || gameDifficulty === "hard") { gameMode(1000, "\nInput a number between 1-1000"); }
        else { console.log("You must choose difficulty by typing either Easy, Medium or Hard!"); };

        console.log("\nDo you want to continue playing? (yes or no)")
        var continueGame = prompt("> ");

        if (continueGame === "Yes" || continueGame === "yes") { continueGame = true; }
        else { continueGame = false; console.log("");};
    }
} while (continueGame);



