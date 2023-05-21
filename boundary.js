function Boundary(x, y ,w, h, a) {
	var options = {
		friction: 0.3,
		restitution: 0.6,
		angle: a,
		isStatic: true

	}
	this.body = Bodies.rectangle(x, y, w, h, options);
	this.w = w;
	this.h = h;
	Composite.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(1);
		noStroke(255);
		fill('white');
		rect(0, 0 ,this.w, this.h);
		pop();
	}
}