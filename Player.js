class Player{

    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x, this.y, 20, 50);
        this.spt.shapeColor = "Yellow";
    }

    move(xdir, ydir)
    {
        this.spt.x += xdir * grid;
        this.spt.y += ydir * grid;
    }

}
