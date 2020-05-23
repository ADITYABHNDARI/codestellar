var board;
var move_now;
var switcher;
var figures;
function init() {
 board=[
    [9, 11, 10, 8, 7, 10, 11, 9],
    [12, 12, 12, 12, 12, 12, 12, 12],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [6, 6, 6, 6, 6, 6, 6, 6],
    [3, 5, 4, 2, 1, 4, 5, 3]
];
move_now = 0;
switcher = 0;
figures = ["", "&#9812", "&#9813", "&#9814", "&#9815", "&#9816", "&#9817", "&#9818", "&#9819", "&#9820", "&#9821", "&#9822", "&#9823"];
 
 

function draw() {
    var area = document.getElementById("area");
    for(var i = 0; i <= board.length - 1; i++){
    
    if(i%2 == 0){
    for(var j = 0; j <= board[i].length - 1; j++){
    if(j%2 == 0){
        area.innerHTML += "<div onclick='move(this)' id='"+i+"_"+j+"' class='dot' style='float: left; font-size: 30px; display: flex; align-items: center;text-shadow: 1px 1px #fff; justify-content: center; background: #fff;width: 40px; height: 40px;'>"+figures[board[i][j]]+"</div>"
 }else {
            area.innerHTML += "<div id='"+i+"_"+j+"' class='dot' onclick='move(this)' style='float: left;display: flex;font-size: 30px; align-items: center; text-shadow: 1px 1px #fff;justify-content: center; background: #333; width: 40px; height: 40px;'>"+figures[board[i][j]]+"</div>"
 }
      
        
    }
    }else {
        for(var j = 0; j <= board[i].length - 1; j++){
    if(j%2 == 0){
        area.innerHTML += "<div id='"+i+"_"+j+"' onclick='move(this)' class='dot' style='float: left;display: flex;font-size: 30px; align-items: center; justify-content: center; background: #333; text-shadow: 1px 1px #fff; width: 40px; height: 40px;'>"+figures[board[i][j]]+"</div>"
 }else {
            area.innerHTML += "<div onclick='move(this)' id='"+i+"_"+j+"' class='dot' style='float: left; display: flex;font-size: 30px; align-items: center;text-shadow: 1px 1px #fff;background: #fff; justify-content: center;width: 40px; height: 40px;'>"+figures[board[i][j]]+"</div>"
 }
      
        
    }
    }
    area.innerHTML += "<br/>"
        
    }
}


draw();
}
function move(e){
var pos = e.id.split("_")
if(switcher == 0){

move_now = board[pos[0]][pos[1]];
board[pos[0]][pos[1]] = "0"
    e.style.background = "#26A69A";
    switcher = 1;
    }else {
       var area = document.getElementById("area");
     area.innerHTML = "";
        board[pos[0]][pos[1]] = move_now;
        var area = document.getElementById("area");
    for(var i = 0; i <= board.length - 1; i++){
    
    if(i%2 == 0){
    for(var j = 0; j <= board[i].length - 1; j++){
    if(j%2 == 0){
        area.innerHTML += "<div onclick='move(this)' id='"+i+"_"+j+"' class='dot' style='float: left; font-size: 30px; display: flex; align-items: center;text-shadow: 1px 1px #fff; justify-content: center; background: #fff;width: 40px; height: 40px;'>"+figures[board[i][j]]+"</div>"
 }else {
            area.innerHTML += "<div id='"+i+"_"+j+"' class='dot' onclick='move(this)' style='float: left;display: flex;font-size: 30px; align-items: center; text-shadow: 1px 1px #fff;justify-content: center; background: #333; width: 40px; height: 40px;'>"+figures[board[i][j]]+"</div>"
 }
      
        
    }
    }else {
        for(var j = 0; j <= board[i].length - 1; j++){
    if(j%2 == 0){
        area.innerHTML += "<div id='"+i+"_"+j+"' onclick='move(this)' class='dot' style='float: left;display: flex;font-size: 30px; align-items: center; justify-content: center; background: #333; text-shadow: 1px 1px #fff; width: 40px; height: 40px;'>"+figures[board[i][j]]+"</div>"
 }else {
            area.innerHTML += "<div onclick='move(this)' id='"+i+"_"+j+"' class='dot' style='float: left; display: flex;font-size: 30px; align-items: center;text-shadow: 1px 1px #fff;background: #fff; justify-content: center;width: 40px; height: 40px;'>"+figures[board[i][j]]+"</div>"
 }
      
        
    }
    }
    area.innerHTML += "<br/>"
        
    }
        
        switcher = 0;
    }
}