require('./Robot.js')
require('./Room.js')
let Room = require('./Room.js');
let Robot = require('./Robot.js');

let roomDimensions=[5, 5];
let dustCoordinates=[[0, 0], [2, 2]];
let startingPosition=[0, 0];

let mainRoom = new Room.Room(roomDimensions);
mainRoom.createRoom();
console.log(mainRoom.grid);
mainRoom.generateDust(dustCoordinates);
let newBot = new Robot.Robot(mainRoom, startingPosition);
// newBot.verticalCollisionDetection([1, 1]);
// newBot.horrizontalCollisionDetection([1, 1]);

console.log("getting current coordinates of R2D2", newBot.getCurrentCoordinates());
// console.log("going north");
// newBot.move("W");
// console.log("I'm now at");
// console.log(newBot.getCurrentCoordinates());
// newBot.removeDust([0, 0]);
newBot.checkForDustAndRemove();
console.log("ok, printing room now");
console.log(mainRoom.grid);