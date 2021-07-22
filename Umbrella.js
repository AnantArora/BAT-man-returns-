class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x,y,150,options);
        this.radius = 50;
        this.image = loadImage("H.png");
        World.add(world, this.body)
        
       
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+65, 300, 500);
    }
}

