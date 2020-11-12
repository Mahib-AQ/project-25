class Ball {

    constructor( diameter) {

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }


        this.body = Bodies.circle(200,200, diameter, options);
        this.diameter = diameter;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
            }

    display() {

        
        ellipseMode(RADIUS);
        fill("yellow");
        imageMode(CENTER);
        image(this.image, 200, 200, this.diameter,this.diameter);


    }


}