require('.././Room.js');
require('.././Robot.js');
const {Room} = require("../Room");
const {Robot} = require("../Robot");
var expect = require('chai').expect;

describe('#Room()', function() {

    // add a test hook
    beforeEach(function() {

    });

    // test a functionality
    it('Create room should create a 2x2 dictionary', function() {
        let mainRoom = new Room([2, 2]);
        mainRoom.createRoom();
        expect(mainRoom.grid).to.eql({
            '0': [ 0, 0 ],
            '1': [ 0, 0 ]
        });
    });

    it('Create room should create a 5x5 dictionary', function() {
        let mainRoom = new Room([5, 5]);
        mainRoom.createRoom();
        expect(mainRoom.grid).to.eql({
            '0': [0, 0, 0, 0, 0],
            '1': [0, 0, 0, 0, 0],
            '2': [0, 0, 0, 0, 0],
            '3': [0, 0, 0, 0, 0],
            '4': [0, 0, 0, 0, 0]
        });
    });

    it('Generate dust in 3 locations', function() {
        let mainRoom = new Room([5, 5]);
        mainRoom.createRoom();
        mainRoom.generateDust([ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ])
        expect(mainRoom.grid).to.eql({
            '0': [0, 1, 0, 0, 0],
            '1': [0, 0, 0, 0, 0],
            '2': [0, 0, 1, 0, 0],
            '3': [0, 0, 1, 0, 0],
            '4': [0, 0, 0, 0, 0]
        });
    });

    // ...some more tests

})

describe('#Robot()', function() {

    // add a test hook
    beforeEach(function() {

    });

    // test a functionality
    it('Robot to remove dust from coordinates', function() {
        let mainRoom = new Room([2, 2]);
        mainRoom.createRoom();
        mainRoom.generateDust([[ 0, 1]]);
        let newBot = new Robot(mainRoom, [0, 0]);
        newBot.move(["N"]);
        newBot.checkForDustAndRemove();
        expect(mainRoom.grid).to.eql({
            '0': [ 0, 0 ],
            '1': [ 0, 0 ]
        });
    });

    it('Robot to remove dust from starting position', function() {
        let mainRoom = new Room([2, 2]);
        mainRoom.createRoom();
        mainRoom.generateDust([[ 0, 0]]);
        let newBot = new Robot(mainRoom, [0, 0]);
        newBot.checkForDustAndRemove();
        newBot.move(["N"]);
        newBot.checkForDustAndRemove();
        expect(mainRoom.grid).to.eql({
            '0': [ 0, 0 ],
            '1': [ 0, 0 ]
        });
    });
})

