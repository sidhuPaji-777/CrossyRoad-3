class Log{
    constructor(speed){
        this.x = random([200,400,600,800,1000]);
        this.y = height-random([550,650,750,1350,1450,1550]);
        this.width = 800;//random([1225, 1250, 1275, 1300, 1350]);
        this.height = 800;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y, this.width, this.width);
        this.spt.velocityX = speed;
        this.spt.shapeColor = "brown";
        this.spt.scale=0.1;
        this.spt.debug = true;
        var randLog = Math.round(random([1, 2]));
        if(randLog==1)
        {
            this.spt.addAnimation("LogOne", logAnimation1);
            this.spt.scale=0.04;
        }
        else
        {
            this.spt.addAnimation("LogTwo", logAnimation2);
            this.spt.scale=0.04;
        }

        
    }

   
}