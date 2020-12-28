import {Component, Input, OnInit} from '@angular/core';
import DirectoryItem from '../model/DirectoryItem';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: DirectoryItem;
  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
  }

}
