const slider = document.getElementById("myRange");

function back() {
    window.open("index.html", "_self");
}

function save() {
    console.assert(slider != null)
    alert(slider.innerHTML)
}