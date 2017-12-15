var balls = []; // empty balls array for objects
var img = []; // empty array for images
var imgArray = ['images/smiley-hero-blue.png',
  'images/smiley-hero-green.png',
  'images/smiley-hero-orange.png'
];

/*image variables*/
var imgPosX;
var imgPosY = 5;
var imgWidth = 75; // global image width
var imgHeight = 125; // global image height
var collide = false;

/*Y height range for balls*/
var hHigh = 200;
var hLow = 400;

// canvas variables required, can't use system functions as public variables
canvW = 800; // canvas width
canvH = 600; // canvas height
var vert = false; // balls direction

function preload() {
  imgR = loadImage('images/robocop-red.png');
  imgG = loadImage('images/robocop-green.png');
  imgCannon = loadImage('images/cannon.png');
  imgCannonF = loadImage('images/cannon-fire.png');
  imgShP = loadImage('images/cool-superhero-purple.png');
  imgShW = loadImage('images/cool-superhero-white.png');
}

function setup() {
  createCanvas(canvW, canvH);
  // load images into array
  for (i = 0; i < imgArray.length; i++) {
    img[i] = loadImage(imgArray[i]);
  }
}

function draw() {
  background(51);
  strokeWeight(1)
  stroke(0);
  addBalls(); // objects
  myNotes(); // notes
  cannon(); // cannon fire
  smileyMan(); // image changer
  heroMan(); // change ball direction
  roboMan(); // image slider
}



function addBalls() {
  if (balls.length < 50) { // add balls to the array when below value
    let x = random(width);
    let y = random(hHigh, hLow);
    let dia = random(30, 90);
    B = new Ball(x, y, dia); // create new object
    balls.push(B); // push object to the array

    image(imgCannonF, 5, height - 90) // fire the cannon each time a ball is created
  }

  // // once the new Ball is created perform object actions
  for (let i = 0; i < balls.length; i++) {

    // change direction aand movement of objects
    if (vert) {
      balls[i].display1();
      balls[i].move1();
    } else {
      balls[i].display();
      balls[i].move();
    }


    if (balls[i].die()) {
      balls.splice(i, 1); // if transparency drops to 0 remove from array
    }
  }
}

function cannon() {
  /*add a bit of glamor when creating new balls*/
  if (mouseIsPressed) {
    image(imgCannonF, 5, height - 90)
  }
  image(imgCannon, 5, height - 90)
}

/*-------------------------------------------------------------------------
	key functions
---------------------------------------------------------------------------*/
function keyPressed() {
  if (keyCode === UP_ARROW) {
    hHigh = hHigh - 50;
    hLow = hLow - 50;
  } else if (keyCode === DOWN_ARROW) {
    hHigh = hHigh + 50;
    hLow = hLow + 50;
  }
}

/*-------------------------------------------------------------------------
	mouse functions
---------------------------------------------------------------------------*/
function mouseDragged() {
  if (mouseX) {
    if (mouseButton == RIGHT) {
      balls.push(new Ball(mouseX, mouseY, 75));
    }
  }
}

function mousePressed() {
  if (mouseX) {
    if (mouseButton == LEFT) {
      balls.push(new Ball(mouseX, mouseY, 75)); // add objects to array  
    }
  }
}

/*-------------------------------------------------------------------------
comments array - add comments into the array and they will automatically 
appear in the top left of the canvas.
---------------------------------------------------------------------------*/
function myNotes() {
  var lc = 5; // set initial top padding then act as counter
  var lh = 16; // line height
  textSize(14);
  fill(255);
  noStroke(0);

  var txtArray = [
    "- Move the mouse left and right over Roboman for slider",
    "- Hover over Smileyman to change colour",
    "- Click on Smileyman to change colour again",
    "- Click on HeroMan to change the direction of the balls",
    "- Left click to fire the cannon and create a new ball at mouse location",
    "- Hold right mouse button and drag the mouse to draw balls",
    "- Balls fade and die over time, then they are reborn if below array value",
    "- Use the UP and DOWN arrows to change the height of the balls (horizontal only)",
    "- Ball colours are base on x and y location",
    " Height Range = " + hHigh,
  ];

  for (var i = 0; i < txtArray.length; i++) {
    lc = lc + lh; // increment counter by line height for each array item
    text(txtArray[i], 10, lc);
  }
}