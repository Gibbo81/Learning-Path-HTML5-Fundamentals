/*
With the style attribute, you can modify (or read) any CSS property, but be careful: 
the syntax changes a little due to the fact that in JavaScript the "-" is a math 
operator, while in CSS it is used to separate properties made of multiple words, such 
as background-color.

When using such properties from JavaScript, the rule is simple:
Remove the "-" sign, Capitalize the word after the "-" sign!

Examples:
text-align becomes style.textAlign
margin-left becomes style.marginLeft
*/

function changeCSSType(evt){
	var p = document.querySelector('#p1');
	p.style.color = 'red';
	p.innerHTML = 'Used stule.color'

	var p = document.querySelector('#p2');
	p.style.backgroundColor = 'lightGreen';
  	p.innerHTML = 'style.backgroundColor used';

	var p = document.querySelector('#p3');
  	p.style.marginLeft = '100px';
  	p.innerHTML = 'style.leftMargin used to shift this paragraph 100px to the right';

	var p = document.querySelector('#p4');
	p.style.border = '2px solid blue';
  	p.style.padding = "20px";
  	p.innerHTML = 'style.border and style.padding (internal margins) used';

	var p = document.querySelector('#p6');
	p.style.textAlign = 'center';
  	p.style.border = "1px dashed red";
	p.style.boxShadow = "2px 2px 5px 0px grey";
	p.innerHTML = 'style.textAlign, style.border, style.bowShadow used';
}

//We have changed directly css property from JS. But we can work in a more fienway
//changing the class off the attribute in this way it will it different css configuration

//remove and add class from HTML element (for css porpose)
function displayListOfCheckedItems(){
	var listOfSelectedValues ="";
	var list = document.querySelectorAll("#fruits input:checked"); 
	list.forEach(function(elm){
		listOfSelectedValues += elm.value + " ";
		var liParent = elm.parentNode;
		liParent.classList.add("checked");
	});
	document.body.append("Selected: " + listOfSelectedValues);
}

function reset(){
	var list = document.querySelectorAll("#fruits input")
	list.forEach(function(elm){
		//removed check from page (visually)
		elm.checked = false;
		var liParent = elm.parentNode;
		liParent.classList.remove("checked");
	});
}


/*
// By default, start without a class in the div: <div class=""/>

// Set "foo" as the class by adding it to the classList
div.classList.add('foo'); // now <div class="foo"/>

// Check that the classList contains the class "foo"
div.classList.contains('foo'); // returns true

// Remove the class "foo" from the list
div.classList.remove('foo'); // now <div class=""/>

// Check if classList contains the class "foo"
div.classList.contains('foo'); // returns false: "foo" is gone

// Check if class contains the class "foo",
// If it does, "foo" is removed, if it doesn't, it's added
div.classList.toggle('foo'); // class set to <div class="foo"/>
div.classList.toggle('foo'); // class set to <div class=""/>
*/