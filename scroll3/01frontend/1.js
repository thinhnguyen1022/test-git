document.addEventListener("DOMContentLoaded", function () {
var menudo = document.querySelector('.menu');
var trangthaimenudo = "duoi100";
var chungtoi = document.querySelector(".chungtoi");
var vtkhoivang = chungtoi.offsetTop;
var trangthaikhoivang = 'duoi';
var khoangcachhienthi = 600;
var chancuoi = khoangcachhienthi+vtkhoivang;
// hieu ung load cua javascript
var phantuload = document.querySelector(".s3");
var vitris3 = phantuload.offsetTop-300;
var trangthais3 = 'duoi';

window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset>100) {
        if (trangthaimenudo=="duoi100") {
            trangthaimenudo='tren100';
            menudo.classList.add('menuden');
        }
    }
    else if (window.pageYOffset<100) {
        if (trangthaimenudo=="tren100") {
            trangthaimenudo='duoi100';
            menudo.classList.remove('menuden');
        }
    }
    if ((window.pageYOffset>vtkhoivang) && (window.pageYOffset<chancuoi)) {
        if (trangthaikhoivang=='duoi') {
            trangthaikhoivang='danghienthi';
            chungtoi.classList.add('vangdunglai');
        }
    }
    else if ((window.pageYOffset<vtkhoivang) || (window.pageYOffset>chancuoi)){
        if (trangthaikhoivang=='danghienthi') {
            trangthaikhoivang='duoi';
            chungtoi.classList.remove('vangdunglai');
        }
    }
    if (window.pageYOffset>vitris3) {
        if (trangthais3=='duoi') {
            trangthais3='tren';
            phantuload.classList.add('dilen');
        }
    }
    else if (window.pageYOffset<vitris3) {
        if (trangthais3=='tren') {
            trangthais3='duoi';
            phantuload.classList.remove('dilen');
        }
    }
})     
})