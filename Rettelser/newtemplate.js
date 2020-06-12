// plus produkt og alertboks - Signe
function alert() {
  alert("Dit template er nu gemt under layout...");
}


(function() {
  let counter = 0;
  let btn = document.getElementById('btn1');
  let form = document.getElementById('form');
  let addInput = function() {
    counter++;
    let input = document.createElement("input");
    input.id = 'input-' + counter;
    input.type = 'text';
    input.name = 'name';
    input.placeholder = 'Produkt' + counter;
    form.appendChild(input);
  };
  btn1.addEventListener('click', function() {
    addInput();
  }.bind(this));
})();

//popup
function myFunction() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
//slut
