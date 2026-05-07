const title = document.getElementById("h1test")
const checkbox = document.getElementById("dysl_check")
var t = document.getElementsByTagName("main")

checkbox.addEventListener("click", function () {
    if (checkbox.checked == true) {
        document.getElementById("h1test").style.fontFamily = "opendyslexic"
        document.getElementsByClassName("App").style.fontFamily = "opendyslexic"
        for (i in t)
            i.style.fontFamily = "opendyslexic"
    }else{
        document.getElementById("h1test").style.fontFamily = "luciole"
    }
});

// function toggleDyslexicMode() {
//     if (document.getElementById("dysl_check").checked == true) {
//         document.getElementById("h1test").innerHTML = "OISEAU";
//     }
// }
//     if (this.checked == true){
//         document.getElementById("html_id").style.fontFamily = opendyslexic
//     } else {
//         document.getElementById("html_id").style.fontFamily = luciole
//     }

// document.addEventListener('DOMContentLoaded', function () {
//    var input = document.getElementById('job');
//    if (localStorage['job']) { // if job is set
//        input.value = localStorage['job']; // set the value
//    }
//    input.onchange = function () {
//         localStorage['job'] = this.value; // change localStorage on change
//     }
// });
// var input = document.getElementById("test")
// function loadSettings() {
//     if (localStorage['test']) {
//         input.value = localStorage['test'];
//     }
// }

// function saveSettings() {
//     localStorage['test'] = input.value;
// }