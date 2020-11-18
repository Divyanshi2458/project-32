class Box
{
constructor(x,y,width,height)
{
    var options={
        'restitution':0.8,
        'friction':1.0,
        'density':1,
    }

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
this.Visibility=255
World.add(world,this.body)
 
}

display()
    {
if(this.body.speed<3)
{
    push ()
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    pop ()
}else{
World.remove(world,this.body)
}

    
}
}
