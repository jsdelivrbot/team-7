
//Adding posts

var postID = 0;

function addPost() {
  postID++;
  addDiv('w3-col l8 s12', 'card' + postID, 'w3-card-4 w3-margin w3-white');
  addDiv('card' + postID, 'container' + postID, 'w3-container');
  addElement('container' + postID, 'h3', 'title-' + postID, '<b>NEW POST</b>');
  addElement('container' + postID, 'h5', 'description-' + postID, 'Title description, <span class="w3-opacity">April 20, 2018</span>');
  addDiv('card' + postID, 'container 2' + postID, 'w3-container');
  addElement('container 2' + postID, 'p', 'paragraph-' + postID, 'This is a paragraph');
  addDiv('container 2' + postID, 'row' + postID, 'w3-row');
  addDiv('row' + postID, 'button' + postID, 'w3-col m8 s12');
  addButton('button' + postID);
  addDiv('row' + postID, 'col' + postID, 'w3-col m4 w3-hide-small');
  addElement('col' + postID, 'p', 'comments- + postID', '<span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span>');
}

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function addButton(parentId){
  var button = document.createElement('button');
  button.setAttribute('class', "w3-button w3-padding-large w3-white w3-border");
  button.setAttribute('onClick', 'like(this)');
  button.setAttribute('value', '0');
  var image = document.createElement('img')
  image.setAttribute('src', 'Images\\like.jpg');
  image.setAttribute('alt', 'Header');
  image.setAttribute('width', '30');
  image.setAttribute('height', '30');
  button.appendChild(image);
  var likes = document.createElement('p');
  likes.innerHTML = '<b>0</b>';
  button.appendChild(likes);
  var p = document.getElementById(parentId);
  p.appendChild(button);
}

function addDiv(parentId, elementID, classID){
    var div = document.createElement('div');
    div.setAttribute('id', elementID);
    div.setAttribute('class', classID);
    var p = document.getElementsByClassName(parentId)[0];
    if (p == undefined){
      p = document.getElementById(parentId);
    }
    p.appendChild(div);
}

//Rearranging Posts

function reArrange(){
  var wrapper = document.getElementsByClassName("w3-col l8 s12");
  var items = Array.prototype.slice.call(wrapper[0].children);
  items.sort(function(a,b){return b.children[1].children[1].children[0].children[0].value - a.children[1].children[1].children[0].children[0].value});
  var elements = document.createDocumentFragment();

  for(let i = 0; i < items.length; i++){
    elements.appendChild(items[i]);
  }

  wrapper[0].innerHTML = null;
  wrapper[0].appendChild(elements);
}

<<<<<<< HEAD
=======
function quickSort(arr, left, right, arr2){
  var len = arr.length,
  pivot,
  partitionIndex;
  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right, arr2);

  //sort left and right
  quickSort(arr, left, partitionIndex - 1, arr2);
  quickSort(arr, partitionIndex + 1, right, arr2);
  }
 return arr2;
}

function partition(arr, pivot, left, right, arr2){
  var pivotValue = arr[pivot].children[1].children[1].children[0].children[0].value,
      partitionIndex = left;
  alert("yo");
  for(var i = left; i < right; i++){
   if(arr[i].children[1].children[1].children[0].children[0].value < pivotValue){
     swap(arr, i, partitionIndex);
     swap(arr2, i, partitionIndex);
     partitionIndex++;
   }
 }
 swap(arr, right, partitionIndex);
 swap(arr2, right, partitionIndex);
 return partitionIndex;
}

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log(i + " swapped with " + j);
}

>>>>>>> ffb9e7319a5fba1da79b3c6ee5acf1b0e158b40b
function like(button){
    button.value++;
    button.children[1].innerHTML = '<b>' + button.value + '</b>';
    reArrange();
}
