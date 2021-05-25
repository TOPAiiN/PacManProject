// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
// This array contains all the elements that can create hexcolors. For example: #0366d6
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/* This const variable calls the 'color' class present in the body of the document (index.html).
HINT: You can tell it's calling a class because it starts with a dot */
const color = document.querySelector('.color');

// We create a function to make the color changes
function colorChanges(){

// this variable is created as a string starting with #; a character we did not include in our array (const hex)
let hexColor = '#';

/* start a loop that creates random colors each time. We set the index to be less than 6 
because hexcolors have 6 characters (#0366d6) after the # */
for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()];
}
// we set the variable to be used as background color using the DOM
document.body.style.backgroundColor = hexColor;
}
// this function creates random numbers 
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 25;
    img.style.left = pos + 'px';
  } else {
    pos += 25;
    img.style.left = pos + 'px';
  }
  colorChanges();
}
setInterval(Run,200);


// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction === 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction === 1 && pos < 0) direction = 0;
  // TODO: Complete this to reverse direction upon hitting screen edge
  return direction;
}

//Please do not change
module.exports = checkPageBounds;
