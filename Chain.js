class Chain{
constructor(b,l){
var option={
bodyA:b,
bodyB:l,
stiffness:0.05,
length:10
}
this.condition=Matter.Constraint.create(option)
World.add(world, this.condition);

}
display(){
    stroke("black");
line(this.condition.bodyA.position.x,this.condition.bobyA.position.y,this.condition.bodyB.position.x,this.condition.bodyB.position.y)
}































}