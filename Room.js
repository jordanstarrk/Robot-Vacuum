/** Class representing a room. */
class Room {
    /**
     * Create a room.
     * @param {list} roomDimensions - dimensions of the room e.g [5, 5].
     */
    constructor(roomDimensions) {
        this.room_dimensions = roomDimensions;
        this.num_rows = roomDimensions[0];
        this.num_cols = roomDimensions[1];
        this.grid = {}; // Using dictionary as the data structure for the room and dirt.
        /*
         * I chose a dictionary over a graph because for a couple reasons:
         * 1. The program is given driving instructions as input values. This means I don't have to find the optimal route or shortest path using graph search algorithms.
         * 2. Easy to implement and extend if we want to store more data at each location in the room. Maybe differet obstacles or types of dust/spills that may require a different or specific type of robot.
         * 3. Quickly search and insert
         */
    }

    /**
     * Create a room based on the room_dimensions passed in Room constructor.
     * @returns prints the room grid to the console
     */
    createRoom() {
        let columns = [];
        let cell = 0;

        var i;
        var numberOfColumns = this.num_rows;
        for (i = 0; i < numberOfColumns; i++) {
            columns.push(cell);
        }

        var numberOfRows = this.num_cols;
        for (i = 0; i < numberOfRows; i++) {
            this.grid[i] = columns;
        }
    }

    /**
     * Generate Dust in the room
     * @param {array} dustCoordinates - coordinates of locations of dust. E.g. [[2, 0], [1, 0]]
     * @returns prints the room grid with 'dust' at dust coordinate locations given.
     */
    generateDust(dustCoordinates) {
        for (const dust of dustCoordinates) {
            let xCoord = dust[0];
            let yCoord = dust[1];
            let tempRow = [];
            let originalRow = this.grid[yCoord];

            for (const i of originalRow) {
                tempRow.push(i);
            }

            tempRow[xCoord] = 1
            this.grid[yCoord] = tempRow;
        }
        console.log(Object.values(this.grid).reverse());
    }
}

module.exports.Room = Room;