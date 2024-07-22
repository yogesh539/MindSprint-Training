
class Contact {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}
class Phonebook {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        this.contacts.push(contact);
        console.log(this.contacts);
    }
    deleteContact(id) {
        this.contacts = this.contacts.filter(con => con.id !== id);
    }
    updateContact(contact) {
        const foundIndex = this.contacts.findIndex(con => con.id === contact.id);
        this.contacts[foundIndex] = contact;
    }
    getAllContacts() {
        return this.contacts;
    }
    getContactById(id) {
        return this.contacts.find(con => con.id === id);
    }
}
const myPhone = new Phonebook();
function addphone() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("contact").value;
    const newContact = new Contact(Date.now(), name, phone);
    if (name == '' || phone == '' || (name == '' && phone == '')) {
        alert('Invalid Credentials');
        return;
    }
    myPhone.addContact(newContact);
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    displayData();
}
function updatephone(id) {
    const contactToUpdate = myPhone.getContactById(id);
    const newNameInput = document.querySelector('[placeholder="Update your Name"]');
    const newPhoneInput = document.querySelector('[placeholder="Update your Phone Number"]');
    const updateButton = document.getElementById('updateButton');
    newNameInput.value = contactToUpdate.name;
    newPhoneInput.value = contactToUpdate.phone;
    updateButton.onclick = function () {
        const updatedName = newNameInput.value;
        const updatedPhone = newPhoneInput.value;
        contactToUpdate.name = updatedName;
        contactToUpdate.phone = updatedPhone;
        myPhone.updateContact(contactToUpdate);
        displayData();
        updateButton.onclick = null;
        document.querySelector('[placeholder="Update your Name"]').value = "";
        document.querySelector('[placeholder="Update your Phone Number"]').value = "";
    };
}
function displayData() {
    const contactList = document.getElementById('contactList');
    const data = myPhone.getAllContacts();
    if (data.length === 0) {
        contactList.innerHTML = `<tr><td colspan="3">No contacts found</td></tr>`;
    } else {
        let html = '';
        data.forEach(contact => {
            html += `
<tr>
<td>${contact.id}</td>
<td>${contact.name}</td>
<td>${contact.phone}</td>
<td>
<button class="btn btn-success" onclick="updatephone(${contact.id})">Edit</button>
<button class="btn btn-danger" onclick="deleteContact(${contact.id})">Delete</button>
</td>
</tr>
        `;
        });
        contactList.innerHTML = html;
    }
}
function deleteContact(id) {
    myPhone.deleteContact(id);
    displayData();
}

displayData();

