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
    chisohientai = (nutnao=='trai') ? ((chisohientai>0) ? (chisohientai - 1) : (soluongslide - 1)) : ((chisohientai<soluongslide-1) ? (chisohientai + 1) : (chisohientai=0));
    var phantutieptheo = slides[chisohientai];
    // End animation check
    var phantutieptheo = slides[chisohientai];
    // check chuyển động kết thúc
    var xulyhientaiketthuccd = function () {
        this.classList.remove('dangxem');
        this.classList.remove((nutnao=='trai') ? ('bienmatkhianprev') : ('bienmatkhiannext'));
        trangthaicuahaichuyendong ++;
        trangthai = (trangthaicuahaichuyendong==2) ? 'dangdungyen' : trangthai;
    }
    
    var xulytieptheoketthuccd = function () {
        this.classList.remove((nutnao=='trai') ? ('divaokhianprev') : ('divaokhiannext'));
        this.classList.add('dangxem');
        trangthaicuahaichuyendong ++;
        trangthai = (trangthaicuahaichuyendong==2) ? 'dangdungyen' : trangthai;
    }

    phantuhientai.addEventListener('webkitAnimationEnd', xulyhientaiketthuccd);
    phantutieptheo.addEventListener('webkitAnimationEnd', xulytieptheoketthuccd);

    // khi chuyển động
    phantuhientai.classList.add((nutnao=='trai') ? ('bienmatkhianprev') : ('bienmatkhiannext'));
    phantutieptheo.classList.add((nutnao=='trai') ? ('divaokhianprev') : ('divaokhiannext'));
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