var list = [
    {ten: 'Tun', tuoi: 20}, 
    {ten: 'Tan', tuoi: 21}, 
    {ten: 'Tin', tuoi: 22}, 
    {ten: 'Ton', tuoi: 23}
]; 

var selectFiter = document.getElementById('selectFilter');
selectFiter = addEventListener('change', onAgeFilterChange);
function onAgeFilterChange() {
    var ageFilter = parseInt(selectFilter.value);
    var filterStudents = list.filter(function (student) {

        return student.tuoi === ageFilter;
    });
    render(filterStudents);
}

function render(list) {
    var add = document.getElementById('add');
    var content = list.map(function (student) {
       return '<tr><td>' + student.ten + '</td><td>' + student.tuoi + '</td></tr>';
    });
    add.innerHTML = content.join('');
}

render(list);
