var nutphai = document.querySelector('.nuts b.phai'),
    nuttrai = document.querySelector('.nuts b.trai'),
    slides = document.querySelectorAll('.slides ul li'),
    chisohientai = 0,
    soluongslide = slides.length,
    trangthai = 'dangdungyen';
    
var chuyenslidechonutphai = function() {
    // kiểm tra trạng thái nếu đang chuyển động thì dừng chương trình
    if (trangthai=='dangchuyendong') {
        return false; // dùng chương trình 
    }
    // đánh dấu là đang chuyển động
    trangthai = 'dangchuyendong';
    var trangthaicuahaichuyendong = 0;
    var phantuhientai = slides[chisohientai];
    // xác định phần tử tiếp theo dựa trên phần tử hiện tại
    if (chisohientai<soluongslide-1) {
        chisohientai = chisohientai+1;
    }
    else{ // là phần tử cuối cùng rồi
        chisohientai=0;
    }
    var phantutieptheo = slides[chisohientai];
    // check chuyển động kết thúc
    var xulyhientaiketthuccd = function () {
        this.classList.remove('dangxem');
        this.classList.remove('bienmatkhiannext');
        trangthaicuahaichuyendong ++;
        if (trangthaicuahaichuyendong==2) {trangthai = 'dangdungyen';}
    }
    
    var xulytieptheoketthuccd = function () {
        this.classList.remove('divaokhiannext');
        this.classList.add('dangxem');
        trangthaicuahaichuyendong ++;
        if (trangthaicuahaichuyendong==2) {trangthai = 'dangdungyen';}
    }

    phantuhientai.addEventListener('webkitAnimationEnd', xulyhientaiketthuccd);
    phantutieptheo.addEventListener('webkitAnimationEnd', xulytieptheoketthuccd);
    // tạo chuyển động sau khi xác định được hai phần tử
    phantuhientai.classList.add('bienmatkhiannext');
    phantutieptheo.classList.add('divaokhiannext');   
};
nutphai.addEventListener('click',chuyenslidechonutphai);
// xong bên phải
var chuyenslidechonuttrai = function() {
    if (trangthai=='dangchuyendong') {return false;}
    trangthai = 'dangchuyendong';
    var phantuhientai = slides[chisohientai];
    var trangthaicuahaichuyendong = 0;
    if (chisohientai>0) {
        chisohientai --;
    }    
    else{
        chisohientai = soluongslide - 1;
    }
    var phantutieptheo = slides[chisohientai];
    var xulyhientaiketthuccd = function () {
        this.classList.remove('dangxem');
        this.classList.remove('bienmatkhianprev');
        trangthaicuahaichuyendong ++;
        if (trangthaicuahaichuyendong==2) {
            trangthai = 'dangdungyen';
        }
    }
    var xulytieptheoketthuccd = function () {
        this.classList.remove('divaokhianprev');
        this.classList.add('dangxem');
        trangthaicuahaichuyendong++;
        if (trangthaicuahaichuyendong==2) {
            trangthai = 'dangdungyen';
        }
    }
    phantuhientai.addEventListener('webkitAnimationEnd', xulyhientaiketthuccd);    
    phantutieptheo.addEventListener('webkitAnimationEnd', xulytieptheoketthuccd);    
    phantuhientai.classList.add('bienmatkhianprev');
    phantutieptheo.classList.add('divaokhianprev');
}
nuttrai.addEventListener('click',chuyenslidechonuttrai);