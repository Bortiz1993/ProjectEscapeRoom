var readlineSync = require('readline-sync');
// player name
var playerName = readlineSync.question("Player name please?");
//Game introduction
var introduction = `${playerName}, Welcome to the Escape Room Game Simulation! ${playerName}, you are in for a fun time!`;
console.log(introduction);

//Boolean flags
var ifPlayerIsAlive = true;
var ifPlayerHasKey = false;

while(ifPlayerIsAlive == true){ 
var menuId = readlineSync.keyIn('Press 1 to put hand in the hole \n Press 2 to find the key, or \n Press 3 to open the door', {limit: '$<1-3>'});
    if (menuId == 1){
        //Option 1, player is dead, game is over.
        console.log("You are DEAD!!, Game is Over.");
        ifPlayerIsAlive = false;
    }
    else if (menuId == 2 &&  ifPlayerHasKey == false){
    //Option 2, Player has not found the key.
    console.log(`${playerName}, you have found the key, quickly procced to option 3!`);
    ifPlayerHasKey = true;
  }
  else if (menuId == 2 && ifPlayerHasKey == true){
 //Option 2, Player already found the key earlier.
 console.log(`${playerName}, you ALREADY found the key earlier, HURRY to option 3!`);
}
else if (menuId == 3 &&  ifPlayerHasKey == false){
    //Option 3, Player has NOT found the key.
    console.log(`${playerName}, you NEED to find the key first!`);

}
else if (menuId == 3 && ifPlayerHasKey == true){
    //Option 3, player has found the key.
    console.log(`${playerName}, you found the KEY and OPENED THE DOOR succefully. Congratulations, you escaped the room succesfully!`);
    ifPlayerIsAlive = false;
}
}
