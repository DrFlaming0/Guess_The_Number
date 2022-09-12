const prompt = require("prompt-sync") ();
let player = { Health: 5, winStreaks: 0 };
const congrats = 
"\n_______  _____  __   _  ______  ______ _______ _______ _     _        _______ _______ _____  _____  __   _ _______ | "+ 
"\n|       |     | | \\  | |  ____ |_____/ |_____|    |    |     | |      |_____|    |      |   |     | | \\  | |______ | " +
"\n|_____  |_____| |  \\_| |_____| |    \\_ |     |    |    |_____| |_____ |     |    |    __|__ |_____| |  \\_| ______| . "; 
console.log("\nGuess the number to win the game!\n");

function gameMode(numberRange, instructions) {
    let randomGeneratedNumber = Math.round(Math.random() * numberRange);
    console.log(instructions);
           
    while (player.Health !== 0 && playerGuess !== randomGeneratedNumber) {
        var playerGuess = parseInt(prompt("> "));
   
        if (playerGuess === randomGeneratedNumber) {
            player.winStreaks++;
            console.log(congrats, "\nYou currently have", player.winStreaks, "winstreaks!");
        }else if (playerGuess > randomGeneratedNumber) {
            console.log("Less than", playerGuess + "\n");
            player.Health--;
            console.log(player.Health, "hearts remaining");
        }else if (playerGuess < randomGeneratedNumber) {
            console.log("Greater than", playerGuess + "\n");
            player.Health--;
            console.log(player.Health, "hearts remaining");
        };
        if (player.Health === 0) {console.log("You Have Failed!")};
    };
};

const startGame = prompt("Press the enter key on your keyboard to play the game! ");

do {
    if (startGame === "") {
        player.Health = 5;
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
} while (continueGame === true);



