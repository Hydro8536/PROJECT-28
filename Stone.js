class Stone {
constructor(x,y){
var options ={
isStatic:false,
restitution:0,
friction:1,
density:1.0,
}
this.x=x;
this.y=y;
this.r=10;
this.body=Bodies.circle(x, y, 10, options)
this.image=loadImage("stone.png");
World.add(world, this.body);

}
display()
{
    
    var stonepos=this.body.position;		

    push()
    translate(stonepos.x, stonepos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    image(this.image,0,0,this.r,this.r)
    pop()
}

}
