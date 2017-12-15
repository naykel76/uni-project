function roboMan() {

	/*This is an image slide that will overlay one image over the top of another.
	The slider is constrained between two x points so it will only work when the
	mouseX is directly over the designated image x positions.*/

	/*image can be relocated to any position on the canvas by change the imgPosX
	and imgPosY values without fear of breaking code*/

	var imgPosX = canvW-85; // image X start position
	var conStart = imgPosX; // constraint start X pos for hover actions
	var conEnd = imgPosX + imgWidth; // constraint end X pos
	var xc = constrain(mouseX, conStart, conEnd); // constrain mouse movement to prevent image scaling

	pix = xc - imgPosX; // offset/reset x pos to 0

	if (xc > imgPosX){
		image(imgR, imgPosX, imgPosY, pix, 125, 0, 0, pix, 125);
	}

	image(imgG, imgPosX, imgPosY);
	/* Hack to prevent the red image from displaying all the time then
	moving to slider. Investigate other methods to display image only when it gets
	to imgPosX (starting x pos).*/
	if (xc > imgPosX){
		image(imgR, imgPosX, imgPosY, pix, 125, 0, 0, pix, 125); // image slider
	}

	text("RoboMan",imgPosX+15,imgPosY+imgHeight+20);
}


function smileyMan() {

	/*This is an example of collision detection, the image will change colour when
	the mouseX or mouseY collides with the image and either mouse button can be
	clicked to change colour again.*/

	/*image can be relocated to any position on the canvas by change the imgPosX
	and imgPosY values without fear of breaking code*/

	imgPosX = canvW-160; // image X start position

	// calculations for collision detection
	var opSide = imgPosX + imgWidth;
	var base = imgPosY + imgHeight;

	// collision detection
	if  (mouseX >= imgPosX && mouseY >= imgPosY && mouseX < opSide && mouseY < base){
		collide = true;
	} else {
		collide = false;
	}

	// collision actions
	if (collide && mouseIsPressed){
		image(img[0], imgPosX, imgPosY);
	} else if (collide){
		image(img[1], imgPosX, imgPosY);
	} else {
		image(img[2], imgPosX, imgPosY);
	}

	text("SmileyMan",imgPosX,imgPosY+imgHeight+20)
}


function heroMan() {

	imgPosX = canvW-250; // image X start position
	// calculations for collision detection
	var opSide = imgPosX + imgWidth;
	var base = imgPosY + imgHeight;

	// collision detection
	if  (mouseX >= imgPosX && mouseY >= imgPosY && mouseX < opSide && mouseY < base){
		collide = true;
	} else {
		collide = false;
	}

	// collision actions
	if (collide && mouseIsPressed){
		if (!vert) {
			vert = true;
		} else {
			vert = false;
		}
	} 

	if (vert){
		image(imgShW, imgPosX, imgPosY);
	} else {
		image(imgShP, imgPosX, imgPosY);
	}

	text("HeroMan",imgPosX,imgPosY+imgHeight+20)
}