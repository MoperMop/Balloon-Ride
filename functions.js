function checkDb(data){
    position = data.val();

    balloon.x = position.x;
    balloon.y = position.y;
}
function showError(){
    console.log("error");
}


function move(x, y){
    db.ref('balloon/position').set({x: position.x+x, y: position.y+y})
}
function setPosition(x, y){
    db.ref('balloon/position').set({x: x, y: y});
}