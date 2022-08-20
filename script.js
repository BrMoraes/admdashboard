let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
   navigation.classList.toggle('active');
   main.classList.toggle('active');
}


let addHoveredClassInList = document.querySelectorAll('.navigation li');
function activeLink(){
   addHoveredClassInList.forEach((item) => item.classList.remove('hovered'));
   this.classList.add('hovered');
   }

addHoveredClassInList.forEach((item) => item.addEventListener('mouseover', activeLink));