var field, theDiv;

function onLoad(){
  field = document.querySelector('#inputField');
  theDiv= document.querySelector('#theDiv');
}

function showWhatWeTyped(){
  theDiv.innerHTML = field.value;
}