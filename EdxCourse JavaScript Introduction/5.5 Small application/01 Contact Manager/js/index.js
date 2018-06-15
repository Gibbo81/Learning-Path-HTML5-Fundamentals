class Contact {
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
}

class ContactManager{
  constructor(){
    this.listOfContacts = [];
  }

  add(contact){
    this.listOfContacts.push(contact);
  }
  remove(contact){
    for(let i=0; i<this.listOfContacts.length;i++)
      if(this.listOfContacts[i].name  === contact.name &&
         this.listOfContacts[i].email === contact.email){
        this.listOfContacts.splice(i,1);
        break;
      }
  }

  print(){
    this.listOfContacts.forEach(x => console.log(x.name));
  }

  sortByName(){
    this.listOfContacts.sort(ContactManager.compareTwoContact);
  }

  static compareTwoContact(c1, c2){ //class method using the static keyword
    if (c1.name<c2.name)
      return -1;
    if (c1.name>c2.name)
      return 1;
    return 0;
  }

  saveContacts(){
    localStorage.contact = JSON.stringify(this.listOfContacts);
  }
  loadContacts(){
    if (localStorage.contact !== undefined) //not null pay attention!
        this.listOfContacts = JSON.parse(localStorage.contact);
  }
}




//try out code

var c1 = new Contact("Pippus", "pippus@gigio.com");
var c2 = new Contact("Plutus", "plutus@fidobau.com");
var c3 = new Contact("Quis", "Quis@fidobau.com");
var c4 = new Contact("Quos", "Quis@fidobau.com");
var c5 = new Contact("Ariostus", "a@fidomiao.com");
var cm = new ContactManager();
cm.add(c1);
cm.add(c2);
cm.add(c3);
cm.add(c4);
cm.add(c5);
cm.print();
console.log("Remove the first one Pippus");
cm.remove(c1);
cm.print();

console.log("Sort by name");
cm.sortByName();
cm.print();

var cm2 = new ContactManager();
console.log("Save and reload contacts");
cm.saveContacts();
cm2.loadContacts();
cm2.print();











