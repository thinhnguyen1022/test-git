var nutphai = document.querySelector('.nuts b.phai'),
    nuttrai = document.querySelector('.nuts b.trai'),
    slides = document.querySelectorAll('.slides ul li'),
    chisohientai = 0,
    soluongslide = slides.length,
    trangthai = 'dangdungyen';
function xacsinh2slidevachuyendong(nutnao) {
    if (trangthai=='dangchuyendong') {
            return false; // dừng chương trình 
        }
    trangthai = 'dangchuyendong';
    var trangthaicuahaichuyendong = 0;
    var phantuhientai = slides[chisohientai];
    if (nutnao=='trai') {
        if (chisohientai>0) {
            chisohientai --;
        }    
        else{
            chisohientai = soluongslide - 1;
        }
        console.log('code xu ly cho nut trai');
    }
    else if (nutnao=='phai') {
        console.log('code xu ly cho nut phai');
        if (chisohientai<soluongslide-1) {
            chisohientai = chisohientai+1;
        }
        else{ // là phần tử cuối cùng rồi
            chisohientai=0;
        }
    }
    var phantutieptheo = slides[chisohientai];
    // End animation check
    var phantutieptheo = slides[chisohientai];
    // check chuyển động kết thúc
    var xulyhientaiketthuccd = function () {
        this.classList.remove('dangxem');
        if (nutnao=='trai') {
            this.classList.remove('bienmatkhianprev');
        }
        else if (nutnao=='phai') {
            this.classList.remove('bienmatkhiannext');
        }
        trangthaicuahaichuyendong ++;
        if (trangthaicuahaichuyendong==2) {trangthai = 'dangdungyen';}
    }
    
    var xulytieptheoketthuccd = function () {
        if (nutnao=='trai') {
            this.classList.remove('divaokhianprev');
        }
        else if (nutnao=='phai') {
            this.classList.remove('divaokhiannext');
        }
        this.classList.add('dangxem');
        trangthaicuahaichuyendong ++;
        if (trangthaicuahaichuyendong==2) {trangthai = 'dangdungyen';}
    }

    phantuhientai.addEventListener('webkitAnimationEnd', xulyhientaiketthuccd);
    phantutieptheo.addEventListener('webkitAnimationEnd', xulytieptheoketthuccd);

    // khi chuyển động
    if (nutnao=='trai') {
        phantuhientai.classList.add('bienmatkhianprev');
        phantutieptheo.classList.add('divaokhianprev');
    }
    else if (nutnao=='phai') {
        phantuhientai.classList.add('bienmatkhiannext');
        phantutieptheo.classList.add('divaokhiannext');  
    }
    // sau khi xác định được hai phần tử rồi thì mình xử lí đến chuyển động
}

var chuyenslidechonutphai = function() {
    xacsinh2slidevachuyendong('phai'); 
}
nutphai.addEventListener('click',chuyenslidechonutphai);
// xong bên phải
var chuyenslidechonuttrai = function() {
    xacsinh2slidevachuyendong('trai');
}
nuttrai.addEventListener('click',chuyenslidechonuttrai);