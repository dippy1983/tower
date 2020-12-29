class polygan{
constructor(x,y,r){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
polygan = Bodies.circle(50,200,50,options)
World.add(world,polygan)
this.image = loadImage(sprites/polygan.png)



}
display(){

push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();


}



}
