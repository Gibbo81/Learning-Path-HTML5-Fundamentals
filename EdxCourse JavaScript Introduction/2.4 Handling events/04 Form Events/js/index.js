function validate(field){
	var name = field.value;
	var output = document.querySelector("#result");
	if (name.length<5) {
		output.innerHTML = "Name too short (at least 5 characters)";
	}
	else{
		output.innerHTML = "Valid name: " + name;
	}
}









