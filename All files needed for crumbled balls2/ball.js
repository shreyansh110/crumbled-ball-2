class Ball{
constructor(x,y,radius){

var options={
    'restitution':1.1,
    'friction':0.,
    'density':3.9,
   isStatic:false


}

this.body=Bodies.circle(x,y,radius,options)
this.radius=radius;
World.add(world,this.body)







}

display(){
var pis=this.body.position
push();
translate(pis.x,pis.y)
ellipseMode(RADIUS);
fill(225);
circle(0,0,this.radius)
pop();


}




































}