document.addEventListener("DOMContentLoaded", function () {
    var nut = document.getElementById('nut1');
    console.log(nut);
    nut.onclick = function () {
        var khoi = document.getElementsByClassName('card');
        khoi[0].classList.toggle('diphai');
    }
}, false)