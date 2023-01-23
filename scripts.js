// business logic for AddressBook
function AddressBook() {
  this.contacts = {};
  this.currentID = 0;
}

AddressBook.prototype.assignId = function() {
  this.currentID += 1;
  return this.currentID;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

//business logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};