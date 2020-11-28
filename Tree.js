class Tree{
constructor(x,y){
 
var options = {
isStatic:true
}
this.body=Bodies.rectangle(x,y,10,10,options);
this.length=500;
this.width=600;
this.image = loadImage("tree.png");
World.add(world,this.body);
}
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }



}
