var anh = document.querySelectorAll('.cacanh img');
var nenden = document.querySelector('.nenden');
var nutdong = document.querySelector('.donglai');
var thongtinanh = document.querySelector('.thongtinanh');
var khoicacanh = document.querySelectorAll('.khoicacanh ul li');
var nphai = document.querySelector('.nphai');
var ntrai = document.querySelector('.ntrai');
var thutucuaactive = 0;
nenden.addEventListener("click", function(){
    nenden.classList.remove('ra');
    thongtinanh.classList.remove('ra');    
    var anhactive = document.querySelector('.khoicacanh ul li.active');
    anhactive.classList.remove('active'); 
})

for (var i = 0; i < anh.length; i++) {
    anh[i].addEventListener("click", function () {
        nenden.classList.add('ra');   
        thongtinanh.classList.add('ra');     
        var anhduocclick = this;
        for (var a = 0; anhduocclick = anhduocclick.previousElementSibling; a++){}
        thutucuaactive = a;
        khoicacanh[a].classList.add('active');
    })
}
var hientai2 = thutucuaactive;
nphai.addEventListener('click', function() {
    soluonganh = khoicacanh.length;
    var phantuhientai = khoicacanh[hientai2];
    hientai2 = (hientai2 < (soluonganh-1)) ? (hientai2 + 1) : 0;
    var phantutieptheo = khoicacanh[hientai2];
    phantuhientai.classList.remove('active'); 
    phantutieptheo.classList.add('active'); 
})
ntrai.addEventListener('click', function() {
    soluonganh = khoicacanh.length;
    var phantuhientai = khoicacanh[hientai2];
    hientai2 = (hientai2 > 0) ? (hientai2 - 1) : (soluonganh - 1);
    var phantutieptheo = khoicacanh[hientai2];
    phantuhientai.classList.remove('active'); 
    phantutieptheo.classList.add('active'); 
})