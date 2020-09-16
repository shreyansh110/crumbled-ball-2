class Stick{
constructor(x,y,width,height){

 var options={
'restitution':0.8,
'friction':0.3,
'density':1.0,
isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)





}
display(){
var pas =this.body.position;
push();
translate(pas.x,pas.y)
rectMode(CENTER)
strokeWeight(4);
fill(241,78,86)
rect(0,0,this.width,this.height);
pop();




}




}