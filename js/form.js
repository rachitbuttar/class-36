class Form{
constructor(){}
display(){
var title=createElement("h2")
title.html("Car Racing game🚗")
title.position(130,0);
var input=createInput("Enter your name");
var button=createButton("PLAY")
input.position(130,160)
button.position(250,200);
button.mousePressed(function(){
    input.hide()
    button.hide()
var name=input.value()
playerCount+=1
player.update(name)
player.updateCount(playerCount)
var Greeting=createElement("h3")
Greeting.html("HELLO😊 "+ name)
Greeting.position(130,160);
})
}
}