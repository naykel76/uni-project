class Ball {
  constructor(x, y, dia, colG) {
    this.x = x;
    this.y = y;
    this.dia = dia;
    this.speed = 3;
    this.colR = 125;
    this.colG = 100;
    this.colB = map(this.y, 0, canvW, 0, 255); // colour 0 to 255 is maped over the width of the canvas
    this.colA = random(235, 255); // alpha
    this.pos = createVector(random(0, width), -50); // starting postion of the object
    this.vel = createVector(0, 0);
    this.acc = createVector(0, random(0.1, 0.01));
  }

  // main object
  display() {
		this.col = color(this.colR,this.colG,this.colB, this.colA);
		strokeWeight(0)
    fill(this.col);
    ellipse(this.x, this.y, this.dia);
  }

  /*objects move from side to side bouncing off the walls and colours are mapped
  to change based on the x and y position*/
  move() {
    this.x += this.speed;
    this.y = this.y + random(-.5, 2);
    this.colR = map(this.x, 0, canvW, 0, 255);
    if (this.x > width || this.x < 0) {
      this.speed = -1 * this.speed;
      this.colR = this.colR * this.speed;
    }
  }

  /*balls dropping at various speeds*/
	display1(){
		this.col = color(this.colR,this.colG,this.colB, this.colA);
		this.colR = map(this.pos.x, 0, canvW, 0, 255);
		strokeWeight(0)
    fill(this.col);
		ellipse(this.pos.x, this.pos.y, this.dia, this.dia);
	}

	/*speed and movement controls - DO NOT alter this is just the algorithm for
	controls. Control speeds by changing the pos and vel vector values.*/
	move1() {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
	}
	
	/*die() is the trigger to remove object from the array the conditions are met
	when transparency reaches 0 or y is greaterthat the screen height*/
	die() {
		this.colA = this.colA - random(0.001, 2); // fade at random speeds
		if (this.colA < 5 || this.y > height){
			return true;
		}
	}
}

