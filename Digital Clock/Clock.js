
// By using setInterval Function we can get Updated time every Second.

setInterval(() =>{

    var time_Obj = new Date(); // Creating Object 
    var Time_For_Current_Location = time_Obj.getHours() + ':' + time_Obj.getMinutes() +':'+ time_Obj.getSeconds(); // Getting Hours,Minutes,Seconds
    document.getElementById('time').innerHTML=Time_For_Current_Location; // Posting it to the html document by refferencing Id

}, 999);

