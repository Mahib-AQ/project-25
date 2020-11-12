class Dustbin {

    constructor( width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(660, 520, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        imageMode(CENTER);
        image(this.image, 660,560 , this.width, this.height);
    }
}