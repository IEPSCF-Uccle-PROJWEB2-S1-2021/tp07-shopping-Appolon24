// Écrivez votre code JavaScript ici.
    
let clk = document.querySelector('button');
let btn = document.querySelector('#input');
function operation()
{
let liste = document.getElementById('items').value;
let ok = liste;
document.getElementById('items').value = "";

var list = document.createElement('li');
btn.appendChild(list);
var sp = document.createElement('span');
var but = document.createElement('button');

list.appendChild(but);
list.appendChild(sp);
let tex = document.createTextNode(ok);
sp.appendChild(tex);

var intern = document.createTextNode("Delete");
but.appendChild(intern);
}
clk.addEventListener('click', operation);