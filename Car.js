class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = height-random([150,250,350,950,1050,1150,1750,1850,1950]);
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = "blue";
        this.speed = speed;
        
        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
        }
        this.spt.velocityX = speed;
        
        // Making random car
        var randCar = Math.round(random([1, 2]));
        if(randCar==1)
        {
            this.spt.addAnimation("CarOne", carAnimation1);
            this.spt.scale=0.04;
        }
        else
        {
            this.spt.addAnimation("CarTwo", carAnimation2);
            this.spt.scale=0.04;
        }
    }
   
}


