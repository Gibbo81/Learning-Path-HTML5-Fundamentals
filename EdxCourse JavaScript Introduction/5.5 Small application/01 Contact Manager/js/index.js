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

  saveContacts(){
    localStorage.contact = JSON.stringify(this.listOfContacts);
  }
  loadContacts(){
    if (localStorage.contact !== undefined) //not null pay attention!
        this.listOfContacts = JSON.parse(localStorage.contact);
  }

  showOnTable(positionId){
    var position = document.getElementById(positionId);
    position.innerHTML='';
    
    var table = document.createElement("table");
    this.listOfContacts.forEach(function(contact){
      var row = table.insertRow();
      var nameCell = row.insertCell();
      nameCell.innerHTML=contact.name;
      var emailCell = row.insertCell();
      emailCell.innerHTML=contact.email;   
      /*row.innerHTML = "<td>" + currentContact.name + "</td>"
                      + "<td>" + currentContact.email + "</td>";
        Alternative way*/
    })

    position.appendChild(table);
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
}















