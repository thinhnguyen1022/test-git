document.addEventListener("DOMContentLoaded",function () {
    var nut = document.querySelector('.nut'),
        menutrai = document.querySelector('.menutrai'),
        den = document.querySelector('.den'),
        trang = document.querySelector('.mautrang'),
        khoito = document.querySelector('.noidungto');
        nut.onclick=function () {
            den.classList.add('len');
            menutrai.classList.remove('vetrai');
            trang.classList.add('trangquay');
        }
        den.onclick=function () {
            den.classList.remove('len');
            menutrai.classList.add('vetrai');
            trang.classList.remove('trangquay');
        }
},false)