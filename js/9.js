var x1 = document.querySelectorAll('.card-columns .card:first-child .card-body');
console.log(x1);
for (var i = 0; i < x1.length; i++) {
    // console.log(x1[0].innerHTML);
        console.log(x1[i]);
        x1[i].innerHTML='haha';
}
var x2=document.querySelectorAll('[data-thongbao]');
console.log(x2[0]);
