require('./Robot.js');
let Room = require('./Room.js');

/** Class representing a robot. */
class Robot {
    /**
     * Create a robot.
     * @param {instance} room - instance of a Room Class.
     * @param {array} startingCoordinates - coordinates where robot starts.
     */

    constructor(room, startingCoordinates) {
        this.room = room;
        this.startingCoordinates = startingCoordinates;
        this.curentCoordinates = startingCoordinates;
        this.numberOfDustPatchesCleaned = 0;
    }

    /**
     * Collision detection for the robot when navigating north / south.
     * @param {array} coordinatesToCheck - coordinates for the robot to check if there is a wall or open space before moving.
     *@returns prints the room grid to the console
     */
    verticalCollisionDetection(coordinatesToCheck) {
        this.coordinatesToCheck = coordinatesToCheck;
        console.log("Checking vertical coordinates to see if there is a wall here...")
        console.log(coordinatesToCheck);
        let yCoordToCheck = coordinatesToCheck[1];
        console.log(yCoordToCheck);

        if (this.room.grid[yCoordToCheck] === undefined) {
            console.log("Wow, careful! What are you trying to do? Have me crash into the wall?");
        } else {
            return 0
        }

    }

    /**
     * Collision detection for the robot when navigating north / south.
     * @param {array} coordinatesToCheck - coordinates for the robot to check if there is a wall or open space before moving.
     *@returns prints the room grid to the console
     */
    horrizontalCollisionDetection(coordinatesToCheck) {
        this.coordinatesToCheck = coordinatesToCheck;
        console.log("Checking horrizontal coordinates to see if there is a wall here...")
        console.log(coordinatesToCheck);
        let xCoordToCheck = coordinatesToCheck[0];
        console.log(xCoordToCheck);

        if (this.room.grid[xCoordToCheck] === undefined) {
            console.log("Wow, careful! What are you trying to do? Have me crash into the wall?");
            return -1
        } else {
            return 0
        }

    }

    /**
     * Helper fucntion to get the current coordinates of the robot.
     * @return {array} currentCoordinates - Current coordinates of the robot.
     */
    getCurrentCoordinates() {
        return this.curentCoordinates;
    }

    /**
     * Helper fucntion to get the current x-coordinate of the robot.
     * @return {number} currentCoordinates - Current x-coordinate of the robot.
     */
    getCurrentXCoordinate() {
        return this.curentCoordinates[0];
    }

    /**
     * Helper fucntion to get the current y-coordinate of the robot.
     * @return {number} currentCoordinates - Current y-coordinate of the robot.
     */
    getCurrentYCoordinate() {
        return this.curentCoordinates[1];
    }

    /**
     * Update the current coordinates of the robot.
     * @param {array} updatedCoordinates - Coordinates of the location you want the robot to move to. E.g. [0, 1]
     * @return {array} currentCoordinates - Current x-coordinate of the robot.
     */
    updateCurrentCoordinates(updatedCoordinates) {
        this.updatedCoordinates = updatedCoordinates;
        this.currentCoordinates = updatedCoordinates;
    }

    /**
     * Make the robot move around the room based on cardinal direction input ("N", "S,", "E", "W").
     * There is also a check for collisions before moving vertically and horizontally.
     * @param {string} cardinalDirection - Direction for the robot to move.
     */
    move(cardinalDirection) {
        let xCoord = this.getCurrentXCoordinate();
        let yCoord = this.getCurrentYCoordinate();
        // console.log(this.getCurrentXCoordinate());
        if (cardinalDirection == "N") {
            let newCoordinates = [xCoord, 0]; //0 represents a placeholder value
            let newYValue = yCoord;
            newYValue += 1; //Move North
            newCoordinates[1] = newYValue;

            if (this.verticalCollisionDetection(newCoordinates) == 0) {
                this.curentCoordinates = newCoordinates;
                this.updateCurrentCoordinates(newCoordinates);
                console.log("R2D2 says: Coast is clear, I'm now at", this.getCurrentCoordinates());
            } else {
                console.log("R2D2 says: I'm going to stay at", this.getCurrentCoordinates());
            }
        }

        if (cardinalDirection == "S") {
            let newCoordinates = [xCoord, 0]; //0 represents a placeholder value
            let newYValue = yCoord;
            newYValue -= 1 //Move South
            newCoordinates[1] = newYValue;

            if (this.verticalCollisionDetection(newCoordinates) == 0) {
                this.curentCoordinates = newCoordinates;
                this.updateCurrentCoordinates(newCoordinates);
                console.log("R2D2 says: Coast is clear, I'm now at", this.getCurrentCoordinates());
            } else {
                console.log("R2D2 says: I'm going to stay at", this.getCurrentCoordinates());
            }
        }

        if (cardinalDirection == "E") {
            let newCoordinates = [0, yCoord]; //0 represents a placeholder value
            let newXValue = yCoord;
            newXValue += 1; //Move East
            newCoordinates[0] = newXValue;

            if (this.horrizontalCollisionDetection(newCoordinates) == 0) {
                this.curentCoordinates = newCoordinates;
                this.updateCurrentCoordinates(newCoordinates);
                console.log("R2D2 says: Coast is clear, I'm now at", this.getCurrentCoordinates());
            } else {
                console.log("R2D2 says: I'm going to stay at", this.getCurrentCoordinates());
            }
        }

        if (cardinalDirection == "W") {
            let newCoordinates = [0, yCoord]; //0 represents a placeholder value
            let newXValue = yCoord;
            newXValue -= 1; //Move West
            newCoordinates[0] = newXValue;

            if (this.horrizontalCollisionDetection(newCoordinates) == 0) {
                this.curentCoordinates = newCoordinates;
                this.updateCurrentCoordinates(newCoordinates);
                console.log("R2D2 says: Coast is clear, I'm now at", this.getCurrentCoordinates());
            } else {
                console.log("R2D2 says: I'm going to stay at", this.getCurrentCoordinates());
            }
        }

    }

    /**
     * Remove dust from a set of coordinates.
     * @param {array} dustCoordinates - Coordinates to remove dust from.
     */
    removeDust(dustCoordinates) {
        this.dustCoordinates = dustCoordinates;
        let xCoord = dustCoordinates[0];
        let yCoord = dustCoordinates[1];
        let tempRow = [];
        let originalGrid = this.room.grid[yCoord]; //placeholder to store the values of the y-coordinate row before dust removed

        for (const i of originalGrid) {
            tempRow.push(i); //pushing the values from the original grid to a temporary row
        }

        tempRow[xCoord] = 0; // removes dirt from given dust coordinates and replaces the value with 0
        this.room.grid[yCoord] = tempRow;

        console.log("Initializing the cleaning process... Bleep bloop bleep\nAlright, all clean!");
        // console.log(Object.values(this.room.grid[yCoord]))
    }

    /**
     * Checks for dust before removing from the robots' current coordinates.
     */
    checkForDustAndRemove() {
        let xCoord = this.getCurrentXCoordinate();
        let yCoord = this.getCurrentYCoordinate();
        let currentCoords = this.getCurrentXCoordinate();
        let tempRow = [];

        for (const i of this.room.grid[yCoord]) {
            tempRow.push(i);
        }
        console.log(this.getCurrentXCoordinate());

            if (tempRow[xCoord] != 0) {
                console.log("Yikes! There is dirt. Right. Here.");
                this.removeDust([xCoord, yCoord]);
                this.numberOfDustPatchesCleaned += 1;
            } else {
                console.log("No dirt here...")
                // return
            }
    }
}

module.exports.Robot = Robot;