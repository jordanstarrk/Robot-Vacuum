var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var myList = text.split("\r\n")

var roomDimensions = [];
var robotStartingPosition = [];
var dustCoordinates = [];
var drivingInstructions = [];

let myListWithoutDirections = myList.slice(0, -1);
dustCoordinates = [];

let cleanedList = [];

for (const i of myListWithoutDirections) {
    cleanedList.push([Number(i[0]), Number(i[2])]);
}

for (const i of cleanedList.slice(2)) {
    dustCoordinates.push([Number(i[0]), Number(i[1])]);
}

let preProcessedDrivingInstructions = myList.slice(-1);

for (const i of preProcessedDrivingInstructions) {
    drivingInstructions = i.split("");
}

roomDimensions = cleanedList[0];
robotStartingPosition = cleanedList[1];

// console.log("room dimensions are:", roomDimensions);
// console.log("hoover position is:", robotStartingPosition);
console.log("dust coordinates are:", dustCoordinates);
// console.log("driving instructions are:", drivingInstructions);

module.exports = {
    roomDimensions: roomDimensions,
    hooverPosition: robotStartingPosition,
    dustCoordinates: dustCoordinates,
    drivingInstructions: drivingInstructions
}
