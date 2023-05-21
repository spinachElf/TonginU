var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

var engine;
var world;
var circles = [];
var boundaries = [];

var ground;

// var render = Render.create({
//   element: document.body,
//   engine: engine,
//   options: {
//     width: window.innerWidth,
//     height: window.innerHeight,
//     wireframes: false, // <-- important
//   },
// });

// Render.run(render);

function setup() {
  createCanvas(2300, 2000);
  engine = Engine.create();
  world = engine.world;
  // Engine.run(engine);

  boundaries.push(new Boundary(width / 2, height, width, 10, 0));
  boundaries.push(new Boundary(0, height, 20, height * 2, 0));
  boundaries.push(new Boundary(width, height, 20, height * 2, 0));

  // boundaries.push(new Boundary(200, height/2, width, 50, -0.5));

  // Composite.add(world, ground);
}

function mouseDragged() {
  circles.push(new Circle(mouseX, mouseY, random(100, 120)));
}

function draw() {
  background(255);
  Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}
