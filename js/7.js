var cactieude = document.getElementsByTagName('h4')
console.log(cactieude);
for (var i = 0; i < cactieude.length; i++) {
    if(i==1){
        cactieude[i].innerHTML = "<button class='btn btn-info btn-block'>nhap vao</button>"
    }
}
// cactieude[0].innerHTML = "<button class='btn btn-info btn-block'>nhap vao</button>"
