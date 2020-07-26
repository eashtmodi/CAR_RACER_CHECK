class Game{
    constructor(){

    }

    getState(){
        var state=database.ref("gameState");
        state.on('value',function(data){
            gameState=data.val();
        })
    }

    update(barbar){
        database.ref('/').update({
            gameState:barbar
        })
 
    }

    start(){

       
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();

        
        }
        car1=createSprite(100,200);
        car1.addImage("car1",car1_img);
        car2=createSprite(300,200);
        car2.addImage("car2",car2_img);
        car3=createSprite(500,200);
        car3.addImage("car2",car3_img);
        car4=createSprite(700,200);
        car4.addImage("car2",car4_img);

        cars=[car1,car2,car3,car4];

    }

    play(){
        form.hide();
        player.getPlayerInfo();
        if(allPlayers!==undefined){
            background("brown");
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
            //var display_position=30;
            //index of array
            var index=0;
            //x and y position of the car;
            var x=200;
            var y;
            for(var plr in allPlayers){
                //add 1 to the index for every loop
                index=index+1;
                //position the cars a little away from each other in x direction.
                x=x+200;
                //use data from the database too display the cars in y direction.
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].position.x=x;
                cars[index-1].position.y=y;
                if(index=player.index){
                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].position.y;
                }
            
            }
            

        }
        if(keyIsDown("UP_ARROW") && player.index!==null){
            player.distance=player.distance+50;
            player.update();
        }
        if(player.distance>3900){
            gameState=2;
        }
        drawSprites();
    }
    end(){
        console.log("GAME ENDED")
    }
    
}