class Plinko {
    constructor(x,y){
  
        var options = {
            isStatic: true,
            restitution: 0.5,
            friction:1,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,10,options)
        
        World.add(world, this.body);
   
    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        noStroke();
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(0,0,10,10)
        pop();
    }
  }