# Robot Vacuum
A console application that navigates a imaginary robotic hoover through an imaginary room based on:
- room dimensions as X and Y coordinates, identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0
- locations of patches of dust, also defined by X and Y coordinates identifying the bottom left corner of those grid positions
- an initial hoover position (X and Y coordinates like patches of dust)
- driving instructions (as cardinal directions where e.g. N and E mean "go north" and "go east" respectively)

## Goal
The goal of the program is to take the room dimensions, the locations of the dust patches, the hoover location and the driving instructions as input and to then output the following:
- The final hoover position (X, Y)
- The number of patches of dust the robot cleaned up

## Input
Program input is received in a file in the main project directory named input.txt.

## Prerequisites
- Node.js - Download & Install Node.js 

## Installation

### Cloning the GitHub Repository 
`$ git clone https://github.com/jordanstarrk/robot-vacuum`

### Running the Application
Open terminal, cd to the project root directory and type node index:

``` 
cd robot-vacuum
node app 
```

### Changing the input
Change the room dimensions, starting position of the robot, locations of dust, and driving instructions


## Approach
### Data Structures
I chose to use a dictionary as the data structure for the room and the dust. I chose this over a graph for a few reasons:
1. The program is given driving instructions as input values. This means I don't have to find the optimal route or shortest path using graph search algorithms
2. Easy to implement and extend if we want to store more data at each location in the room. Maybe differet obstacles or types of dust/spills that may require a different or specific type of robot
3. Quickly search and insert to keep the program quick at scale  

### Code Organization
There are 2 core classes that make up this program
1. Room.js
2. Robot.js

This keeps the code organized and also makes it easy to extend if we wanted to create multiple rooms or multiple robots
