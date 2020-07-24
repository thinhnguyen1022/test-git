document.addEventListener("DOMContentLoaded",function () {
    window.addEventListener('scroll',function () {
       console.log(window.pageYOffset);
        if (window.pageYOffset<300) {
            console.log('dang o menu');
        }
    })
},false)