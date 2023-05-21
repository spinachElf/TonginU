var img = [];

function Circle(x, y, r) {
  var options = {
    friction: 0.3,
    restitution: 0.6,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  Composite.add(world, this.body);
  const constImg = img[Math.floor(Math.random() * 10)];

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(0);
    stroke(255);

    image(constImg, -this.r, -this.r, this.r * 2, this.r * 2);

    pop();
  };
}

function preload() {
  for (let i = 1; i < 11; i++) {
    img.push(loadImage(`./coin_${i}.png`));
  }
}
