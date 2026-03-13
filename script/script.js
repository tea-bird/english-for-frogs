
function toggleDyslexicMode() {
    
}

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
function loadSettings() {
    if (localStorage['test']) {
        input.value = localStorage['test'];
    }
}

function saveSettings() {
    localStorage['test'] = input.value;
}