
//show on page
function work(){
	var cm = new ContactManager();
	initData(cm);

	console.log("Sort by name");
	cm.sortByName();
	cm.print();

	var cm2 = new ContactManager();
	console.log("Save and reload contacts");
	cm.saveContacts();
	cm2.loadContacts();
	cm2.print();


	cm2.showOnTable('contacts');
}


function initData(contactManager){
	var c1 = new Contact("Pippus", "pippus@gigio.com");
	var c2 = new Contact("Plutus", "plutus@fidobau.com");
	var c3 = new Contact("Quis", "Quis@fidobau.com");
	var c4 = new Contact("Quos", "Quis@fidobau.com");
	var c5 = new Contact("Ariostus", "a@fidomiao.com");

	contactManager.add(c1);
	contactManager.add(c2);
	contactManager.add(c3);
	contactManager.add(c4);
	contactManager.add(c5);
	contactManager.print();
	console.log("Remove the first one Pippus");
	contactManager.remove(c1);
	contactManager.print();
}
