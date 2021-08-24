var element_1 = document.getElementById('qwerty');
var element_2 = document.getElementById('phrase');
var element_3 = document.getElementById('btn_reset');

var missed_variable = 0;

var phrase = ['JavaScript', 'Ruby', 'Golang', 'Java', 'JQuery'];

document.addEventListener("click", myFunction());

function myFunction() {
   if (false) 
   document.getElementById("overlay").style.display="none";
   else 
   document.getElementById("overlay").style.display="flex";
}