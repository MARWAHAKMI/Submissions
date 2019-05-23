

var div = document.createElement('div');
var input = document.getElementById('name')
div.setAttribute('class', 'note');
document.body.appendChild(div);
input.onkeyup = function DivFunc(){
    div.innerHTML = input.value 
}


