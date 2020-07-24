var nut = document.querySelector('.nut');
var khoi = document.querySelector('.khoi');
khoi.addEventListener('webkitAnimationEnd', function () {
    console.log('ket thuc chuyen dong');
    khoi.classList.remove('dichuyen');
})
nut.addEventListener('click', function () {
    khoi.classList.add('dichuyen');
})