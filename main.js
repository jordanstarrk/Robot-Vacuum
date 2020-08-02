require('./Robot.js');
require('./Room.js');
const loadFile = require('./loadFile.js');

let Room = require('./Room.js');
let Robot = require('./Robot.js');

let roomDimensions=loadFile.roomDimensions;
let startingPosition=loadFile.hooverPosition;
let dustCoordinates=loadFile.dustCoordinates;
let drivingInstructions=loadFile.drivingInstructions;

//Create and Print Room
let mainRoom = new Room.Room(roomDimensions);
mainRoom.createRoom();
console.log(Object.values(mainRoom.grid).reverse());

//Generate Dust
mainRoom.generateDust(dustCoordinates);

//Create Bot
let newBot = new Robot.Robot(mainRoom, startingPosition);

for (const cardinalDirection of drivingInstructions) {
    // newBot.checkForDustAndRemove(); //This will remove dust if the robot starts at [0,0] and there is dust there.
    newBot.move(cardinalDirection);
    newBot.checkForDustAndRemove();
}

//Print final room output
console.log("Great! All finished based on your directions. Check out the room now. ")
console.log(Object.values(mainRoom.grid).reverse());

console.log("Here is your final output")
console.log("Robot final location is", newBot.getCurrentCoordinates())
console.log("Number of dust patches cleaned", newBot.numberOfDustPatchesCleaned);