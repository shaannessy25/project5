var beast, color1, color2, color3, oneThird, movingTowardsMouse;

function setup () {
  createCanvas(400, 200); // creates canvas
  helperVariables(); // assigns global variable values other than beast
  
  beast = {
    x: 50,
    y: height * 2/3,
    size: 80,
    color: color1,
    message: "Click to play",
    color1: color(255, 182, 110),
    color2: color(215, 189, 226),
    color3: color(231, 76, 60),
    oneThird: 0.3,
    speed: 7,
    movingTowardsMouse: false, 
  };
   draw();
}

function draw () {
    helperBackground();
    helperDrawBeast();
    helperText();

if(beast.x > width){            //causes the beast to move to the left
  beast.speed = -7;
  ellipse(beast.x - (4 * beast.speed), beast.y + 30, beast.size / 2, beast.size / 2);
}
  else if( beast.x < 1){   // causes beast to move to the right
  beast.speed = 7;
    ellipse(beast.x + (4 * beast.speed), beast.y - 30, beast.size / 2, beast.size / 2);
}

   if(beast.x >= (width/3 * 2)){   //changes the beast's fill color based on location
     beast.color = color3;
   }
   else if (beast.x >= (width/3)) {
     beast.color = color2;
   }
  else if(beast.x >= (width/6)){
      beast.color = color1;
  }

beast.x = beast.x + beast.speed; 



if(beast.speed > 0 && beast.x < mouseX || beast.speed < 0 && beast.x > mouseX) {   //tells the user where the beast is bases on location

  beast.movingTowardsMouse = true;
}
    else if(beast.speed > 0 && beast.x > mouseX || beast.speed < 0 && beast.x < mouseX) {
     
      beast.movingTowardsMouse = false;
    }
    
  if(beast.movingTowardsMouse === true){
    beast.message = "Chasing Mouse";
    
  }
    else if(beast.movingTowardsMouse === false) {
      
      beast.message = "Fleeing Mouse";
      
    }

















  // #2 Update beast position variables

  // #3 update the beast color to match the background

  // #4 assign true or false to movingTowardsMouse
  
  // #5 Update beast.message based on movingTowardsMouse

  // Bonus 1 and 2









}
