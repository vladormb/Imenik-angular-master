import DirectoryItem from "./DirectoryItem";
class Directory {

  contacts: any;

    constructor() {
        this.contacts = this.loadFromLocalStorage();
    }

    add(contact) {
        if(contact.name === "" || contact.phone === ""){
            return
        }
        if(contact.phone.length >10){
            return
        }
        this.contacts.push(contact);
        this.saveToLocalStorage();
    }

    delete(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();
    }

    changeState() {
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('contact-data', JSON.stringify(this.contacts));
    }

    loadFromLocalStorage() {
        const json = localStorage.getItem('contact-data');

        if (json === null) {
          return [];
        }
        const jsonParsed = JSON.parse(json, (key, value) => {
            if (key === "date") {
                value = new Date(value);
            }
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        const directoryItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            directoryItems.push(DirectoryItem.fromJSON(jsonParsed[i]));
        }

        return directoryItems;
    }

}
export default Directory;
