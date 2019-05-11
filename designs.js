// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

  // Your code goes here!
    
var table = document.querySelector('table#pixelCanvas');
var height = document.querySelector('input#inputHeight');
var width = document.querySelector('input#inputWidth');
var button = document.querySelector('input[type="submit"]');
var color = document.querySelector('input#colorPicker');
var count = 0;

function makeGrid(e){
  e.preventDefault(); 
  table.innerHTML = "";

  for(var i = 1; i <= height.value; i++){
    var row = document.createElement('tr');
    table.appendChild(row);
   
    for(var j = 1; j<= width.value; j++){
      var col = document.createElement('td');
      document.querySelector('tr:last-of-type').appendChild(col);

}

}

}

function col(e){
    count++;
    if(count%2==0){
	  e.target.style.background = color.value;
    }else{
      e.target.style.background = '#fff';
    }
}

button.addEventListener('click', makeGrid);
table.addEventListener('click',col);
    
