import { Injectable } from '@angular/core';
import Directory from '../model/Directory';
import DirectoryItem from '../model/DirectoryItem';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  directory: Directory
  constructor() {
    this.directory = new Directory;
  }

  addContact(contactName, contactPhone){
    let contact = new DirectoryItem(contactName, contactPhone, new Date());
    this.directory.add(contact);
  }
  deleteContact(contact){
    this.directory.delete(contact);
  }
}
