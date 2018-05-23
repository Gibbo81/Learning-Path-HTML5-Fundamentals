
function insertRow(){
	var table = document.querySelector("#myTable");

	var row = table.insertRow(); 	//insert at the end of the table
	var row3 = table.insertRow(3);	//insert at position 3

	row3.innerHTML = "<td>3New3</td><td>3New3</td><td>3New3</td>";
	row.innerHTML = "<td>New</td><td>New</td><td>New</td>";


	/*i can use this verbose way to insert a row
	  var cell1 = row.insertCell();
	  cell1.innerHTML = "New cell1";
	  var cell2 = row.insertCell();
	  cell2.innerHTML = "New cell2";
	  var cell3 = row.insertCell();
	  cell3.innerHTML = "New cell3";
	*/
}

function deleteFirstRow(){
	var table = document.querySelector("#myTable");
	table.deleteRow(1);  //0 is the index!
}
