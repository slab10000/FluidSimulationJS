// WARNING!!
// He desactivado el code completion de copilot desde los ajusted de copilot


let gravity;
let position;
let velocity;

let circleRadius;

let collisionDamping;

let collisionRectPadding;

// vector que define el área de rebote
let boundsSize; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Add gravity
  gravity = createVector(0, 2000);

  //initial position in the middle of the screen
  position = createVector(displayWidth/2, displayHeight/2);

  //initial velocity is 0
  velocity = createVector(0, 0);

  circleRadius = 30;

  collisionDamping = 0.85;

  collisionRectPadding = 150

  boundsSize = createVector(width - collisionRectPadding, height - collisionRectPadding);
}

function draw() {
  
  background("black");

  textSize(22);
  fill('white');
  text("Position:\n" + "x: " + position.x + "\n" + "y: " + position.y, 20, 50 );
  text("Boundaries:\n" + "x: " + boundsSize.x + "\n" + "y: " + boundsSize.y, width - 200, 50 );
 
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

  // Collition logic
  resolveCollisions();

  //draw box
  fill('black')
  stroke('white')
  rect(collisionRectPadding, collisionRectPadding, width - (2 * collisionRectPadding), height - (2 * collisionRectPadding))

  // Draw circle
  fill(173, 216, 230); // light blue
  noStroke();
  circle(position.x, position.y, 2 * circleRadius);
  
}

function resolveCollisions() {
  let realBoundsSize = p5.Vector.sub(boundsSize, createVector(circleRadius, circleRadius));

  // Eje X
  if (position.x > realBoundsSize.x ) {
    position.x = realBoundsSize.x
    velocity.x *= -1;
  }

  // Eje Y
  if (position.y > realBoundsSize.y) {
    position.y = realBoundsSize.y
    velocity.y *= -1 * collisionDamping;
  }
}
