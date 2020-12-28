import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  constructor(public contactsService: ContactsService ) { }

  ngOnInit(): void {
  }

}
