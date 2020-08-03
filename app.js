require('./Robot.js');
require('./Room.js');
const loadFile = require('./scripts/loadFile.js');

let Room = require('./Room.js');
let Robot = require('./Robot.js');

let roomDimensions=loadFile.roomDimensions;
let startingPosition=loadFile.hooverPosition;
let dustCoordinates=loadFile.dustCoordinates;
let drivingInstructions=loadFile.drivingInstructions;

//Create and Print Room
let mainRoom = new Room.Room(roomDimensions);
mainRoom.createRoom();
console.log("\nWelcome to the robot room cleaner!\nHere is the room based on the dimensions you provided in loadFile.js");
console.log(Object.values(mainRoom.grid).reverse());

//Generate Dust
console.log("\nLet's generate some dust...");
mainRoom.generateDust(dustCoordinates);
console.log("There you go. Above is the room with dust. Places in the room with dust are marked 1, and places without dust are marked 0.");

//Create Bot
let newBot = new Robot.Robot(mainRoom, startingPosition);

//Send Driving Instructions to the Robot
console.log("\nInitializing Robot...\n\nRobot says: Hello! I'll begin calibrating my route based on the instructions you provided in loadFile.js...\nRobot says: Alright, let's get cleaning!");
for (const cardinalDirection of drivingInstructions) {
    // newBot.checkForDustAndRemove(); //This will remove dust if the robot starts at [0,0] and there is dust there.
    newBot.move(cardinalDirection);
    newBot.checkForDustAndRemove();
}

//Print final room output
console.log("\nRobot says: Great! All finished based on your directions. Here is the room after cleaning: ")
console.log(Object.values(mainRoom.grid).reverse());

console.log("\nRobot says: Here is your final output:")
console.log("  - Robot final location is", newBot.getCurrentCoordinates())
console.log("  - Number of dust patches cleaned", newBot.numberOfDustPatchesCleaned);