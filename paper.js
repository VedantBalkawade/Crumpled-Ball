class paper{
	constructor(x,y)
	{
		var options = {
            
            'restitution':0.3,
            'friction':0,
            'density':1.2
            
        }
	// assign options to the rubber ball
		
    this.body=Bodies.rectangle(x,y,80,50, options)
    this.width=80
    this.height=50
    
    World.add(world, this.body);

}
display()
{
        var paperpos=this.body.position;
        var angle=this.body.angle		
        push()
        translate(paperpos.x, paperpos.y);
        rotate(angle)
        rectMode(CENTER)
        

      //  strokeWeight(4);
       // stroke("black");
        fill("black");
        //draw the ellipse here to display the rubber ball
        rect(0,0,this.width,this.height)

        pop()
}

}