document.addEventListener("DOMContentLoaded", function () 
{
    var nut = document.getElementsByClassName('n2');
    for (var i = 0; i < nut.length; i++)
    {
        nut[i].onclick=function ()   
        {         
            console.log(this.getAttribute('data-mk'));
            
        }    
    }    
},false)