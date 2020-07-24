// var diem=1;
// if (diem>=5) {console.log('tren trung binh');}
// else{console.log('duoi trung binh');
// }
// var ten = ['haha1', 'ad', '3sad'];
// console.log(ten[2]);
var dongho={
    hangsx: "casio",
    mau: "den",
    gia: "5000000",
    gioitinh: "nam",
    hienthingay: function () {
        console.log("22/10/97");
    }
}
console.log(dongho.hangsx);
var hocvien={
    ten: "Nguyen Van A",
    tuoi: 5,
    noisinh: "sg",
    chieucao: 175,
    cannang: 60,
    tentuoi: function () {
        return this.ten +" "+ this.tuoi;
    },
    suckhoe: function () {
        if (this.chieucao/this.cannang<=3) {
            return "chuan";
        } else {
            return "ko chuan";
        }
    }
}
console.log(hocvien.tentuoi());
console.log(hocvien.suckhoe());



