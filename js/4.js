// var x = 210;
// var y = 10;
// x = x.toString();
// console.log(x+y);

// function tinh(x1,x2) {
//     var tong = x1+x2;
//     console.log('tong cua hai so la: ' + tong);
// }
// tinh(20,10); 

// function tinh(x1,x2) {
//     var tong = (x1+x2)/2;
//     return tong;
// }
// console.log(tinh(20,10));

// khai bao contructor
function CacMonAn(t, g, nl) 
{
    this.ten = t;
    this.gia = g;
    this.nguyenlieu = nl;
}
var mon1 = new CacMonAn('bo xao', 30000, 'bo');
var mon2 = new CacMonAn('rau xao', 30000, 'rau');
console.log(mon1);
console.log(mon2);
