// function mouse(color) {
//     this.color = color;
//     this.dead = false;
// }
// mouse.prototype.die = function(){
//     this.dead = true;
// };
// function cat(){
//     this.stomach = [];
// };
// cat.prototype.eat = function(Mouse) {
//     this.stomach.push(Mouse);
//     Mouse.die();
// };
// var jerry = new mouse('black');
// var mick = new mouse('yellow');
// console.log(jerry);
// console.log(mick);
// var tom = new cat();
// tom.eat(jerry);
// tom.eat(mick);
// console.log(tom);

// function x() {
//     var tien = 20;
//     if(nguoi.age<15){
//         return 15*2;
//     }
//     else if (nguoi.age>50) {
//         return 15;
//     }
//     else{
//         return 15/2;
//     }
// }
// var nguoi = {
//     age: 15
// }
// var y = x();
// console.log(y);

var storageKey = 'listss';
var dataString = localStorage.getItem(storageKey);
var listss;
if (dataString) {
    listss = JSON.parse(dataString);
}else{
    listss = [];
}

var add = document.getElementById('add');
add.addEventListener('click', addItem);  
function addItem() {
    var input = document.getElementById('newItem');
    var newItem = input.value;
    listss.push(newItem);
    render(); 
    input.value = '';
    // lưu dữ liệu khi thao tac trên web
    localStorage.setItem(storageKey, JSON.stringify(listss));
}
function render() {
    var lists = document.getElementById('list');
    var content = listss.map(function(item){
        return '<li>' + item + '</li>';
    });
    // console.log(content);
    lists.innerHTML = content.join('');
}
render();

    
