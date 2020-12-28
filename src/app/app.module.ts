import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ContactComponent } from './contact/contact.component';
import { PhoneDirectoryComponent } from './phone-directory/phone-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    AllContactsComponent,
    ContactComponent,
    PhoneDirectoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
