console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Morgan";
let lastName = "Fulbright";
var age = 22;
// Exercise 2
let fullName = firstName + " " + lastName;
console.log(fullName);
// Exercise 3
let city = "Buenos Aires";
let favorite = "video games";
let favorite2 = "reading"
let myStory = `Hell0, my name is ${fullName}. I am currently living in ${city}. My favorite pastimes are playing ${favorite} and ${favorite2}`;
console.log(myStory);

var plane = "plane";
var sevenFiftySeven = "757";
var drone = "drone";
var shellPlane = null;
var nothing = "";

var flyingObjects = [plane, sevenFiftySeven, drone, shellPlane, nothing];

function takeOff(objects){
  for (i = 0; i < objects.length; i++){
    if (objects[i]){
      console.log(objects[i] + " is preparing for takeoff!");
      }
    else {
      console.log(`${objects[i]} cannot fly`);
    }
  }
}
takeOff(flyingObjects);