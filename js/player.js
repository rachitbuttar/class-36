class Player{
constructor(){}
getCount(){
var playerCountref= database.ref("playerCount")
playerCountref.on("value",function(data){
playerCount=data.val()
})
}
updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}
update(name){
    var Playerindex="player"+playerCount
    database.ref(Playerindex).set({
        name:name
    })
}
} 