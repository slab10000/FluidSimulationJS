// WARNING!!
// He desactivado el code completion de copilot desde los ajusted de copilot


let gravity;
let position;
let velocity;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Add gravity
  gravity = createVector(0, 980);

  //initial position in the middle of the screen
  position = createVector(displayWidth/2, 0);

  //initial velocity is 0
  velocity = createVector(0, 0);
}

function draw() {
  
  background("black");
  //circle(displayWidth/2, displayHeight/2, 100)
  
  // Deltatime in miliseconds
  // Deltatime is the time between this frame and the last one
  let dt = deltaTime/1000;

  /*****      velocity += gravity * dt      *****/
  // How much velocity increased since last time = acceleration * time
  let velocityStep = p5.Vector.mult(gravity, dt);

  // Add that increase to the total velocity
  velocity.add(velocityStep);

  /*****      position += velocity * dt      *****/
  let positionStep = p5.Vector.mult(velocity, dt);
  position.add(positionStep);

  // Draw circle
  fill(173, 216, 230); // light blue
  noStroke();
  circle(position.x, position.y, 100);
  
}
