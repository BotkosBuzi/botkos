const henlo = document.getElementsByTagName("p");
let count = 0;

function setTitle() {
    let title = document.getElementById("title");
    if(Math.random() < 0.5)
        title.innerText += " Buzi";
    else
        title.innerText += " Buzzancs";
}
window.onload = setTitle;

function settings() {
    window.open("settings.html", "_self");
}
function yt() {
    window.open("https://www.youtube.com/channel/UCCOv_Ii_TcOMD_4dBT-44Bg");
}

window.setInterval(function() {
    henlo[1].innerHTML = henlo[1].innerHTML+"Botkos ";
    if(count % 2 == 0) {
        henlo[1].innerHTML = henlo[1].innerHTML+"Buzi; ";
    }else{
        henlo[1].innerHTML = henlo[1].innerHTML+"Buzzancs; "
    }
    count++;
},2000);