function openModal() {
  var a = document.createElement('div');
  var b = document.createElement('button');
  var f = document.createElement('div');
  var e = document.createAttribute('onclick');
  e.value = "closeModal()"
  b.setAttributeNode(e);
  a.id = 'modal';
  b.id = 'exit';
  f.id = 'overlay';
  b.innerHTML = 'X';
  document.body.appendChild(a);
  document.body.appendChild(f);
  a.appendChild(b);



}
function closeModal() {
  var c = document.getElementById('modal')
  var d = document.getElementById('exit')
  var g = document.getElementById('overlay')
  c.remove();
  d.remove();
  g.remove();
}
function iceburg() {
  openModal();
  var img = document.createElement('img');
  img.src = "image/iceburgs.jpg"
  img.id = "image"
  var mdl = document.getElementById('modal');
  mdl.appendChild(img);

}

function salamander() {
  openModal();
  var img = document.createElement('img');
  img.src = "image/salamander.jpg"
  img.id = "image"
  var mdl = document.getElementById('modal');
  mdl.appendChild(img);

}


//this script written by Aaron Endsley



console.log('This Script Written by Aaron Endsley')
