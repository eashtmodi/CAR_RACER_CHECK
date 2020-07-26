class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("name");
        this.button=createButton("play");
    }

    display(){
        this.title.html("car racing game");
        this.title.position(displayWidth/2-50,20);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+50,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
        })
    

    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
    }
}