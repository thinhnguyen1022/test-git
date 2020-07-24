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
var lists = document.getElementById('list');
var add = document.getElementById('add');

add.addEventListener('click', addItem); 
lists.addEventListener('click', onListClicked);

var listss;

if (dataString) {
    listss = JSON.parse(dataString);
}
else{
    listss = [];
}

function onListClicked(event) {
    var button = event.target;
    var i = parseInt(button.dataset.id);
    // listss.spLice(i, 1);
    render();
    localStorage.setItem(storageKey, JSON.stringify(listss));
} 
var input = document.getElementById('newItem');
input.addEventListener('change', updateSessionStorage);
function updateSessionStorage() {
    sessionStorage.setItem('draft', input.value);
}
 
function addItem() {
    var newItem = input.value;
    listss.push(newItem);
    render(); 
    input.value = '';
    // lưu dữ liệu khi thao tac trên web
    localStorage.setItem(storageKey, JSON.stringify(listss));
}
function render() {
    var content = listss.map(function(item, i){
        return '<li>' + item + '  <button data-id="'+ i +'">Delete</button></li>';
    });
    // console.log(content);
    lists.innerHTML = content.join('');
}
render();

    
