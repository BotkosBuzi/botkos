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

window.setInterval(function() {
    henlo[0].innerHTML = henlo[0].innerHTML+"Botkos ";
    if(count % 2 == 0) {
        henlo[0].innerHTML = henlo[0].innerHTML+"Buzi; ";
    }else{
        henlo[0].innerHTML = henlo[0].innerHTML+"Buzzancs; "
    }
    count++;
},2000);