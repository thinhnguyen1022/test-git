document.addEventListener("DOMContentLoaded", function () {
    var nut = document.getElementsByClassName('dekick'); 
    var nd = document.getElementsByClassName('danhsach')   
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick=function () {
            if (this.classList[1]='mautrang')
            {
                console.log('asdnsajd');
                
             this.classList.remove('mautrang'); 
             var noidunghr = this.getAttribute('data-nguoidung');
             var phantuhr = document.getElementById(noidunghr);
             phantuhr.classList.remove('ra');  
            }
            else
            {
                for (var k = 0; k < nut.length; k++) {
                    nut[k].classList.add('mautrang');
                }
                this.classList.toggle('mautrang');
                var noidunghr = this.getAttribute('data-nguoidung');
                var phantuhr = document.getElementById(noidunghr);
                for (let o = 0; o < nd.length; o++) {
                    nd[o].classList.remove('ra')  
                }
                phantuhr.classList.toggle('ra');
            }
            
        }
    }
},false)