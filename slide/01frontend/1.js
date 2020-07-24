document.addEventListener("DOMContentLoaded", function () {
    var nut = document.querySelectorAll('.chuyenslide ul li');
    var slides = document.querySelectorAll('.cacslide ul li');
    var thoigian = setInterval(function () { autoSlide()},3000);
    // bắt sự kiện cho từng nút
    for (var i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click', function () {
            // trước tiên hủy tự chuyển động
            clearInterval(thoigian);
            // bỏ tất cả màu đen đi
            for (var i = 0; i < nut.length; i++) {
                nut[i].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');
            // xu li phan tinh vi tri
           var nutkichhoat = this;
           var vitrinut = 0;
           for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {}
               for (var i = 0; i < slides.length; i++) {
                   slides[i].classList.remove('active');
                   slides[vitrinut].classList.add('active');
               }
        })
        
    }//het su kien cho nut
    
    // viet ham tu chuyen slide
    function autoSlide() {
        // var thoigian = setInterval(function () {
            // buoc1: xem slide nào đang hiển thị
        var vitrislide = 0;
        var slidehientai = document.querySelector('.cacslide ul li.active');
        for (vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide++) {}
        // nếu mà chưa đến vị trí slide cuối cùng tức là vitrislides <= slides.length --> hoạt động bình thường
        console.log('vi tri cua slide hien tai la:' + vitrislide);
        if (vitrislide<(slides.length-1)) {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }            
            slides[vitrislide].nextElementSibling.classList.add('active');
            nut[vitrislide].nextElementSibling.classList.add('kichhoat');
        }
        else{
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }            
            slides[0].classList.add('active');
            nut[0].classList.add('kichhoat');
        }
        // },5000);
    }     
})