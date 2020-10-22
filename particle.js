class Particle {
    constructor(x,y,diameter){
  
        var options = {
            restitution: 0.5,
        }
        this.diameter = diameter
        this.body = Bodies.circle(x,y,diameter,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
   
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.diameter,this.diameter)
        pop();
    }
  }