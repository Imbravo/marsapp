import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/classes/contact';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup | undefined;


  constructor(firestore: AngularFirestore, private fb: FormBuilder) {


   }

  ngOnInit(): void {
  }


  addContact(contact: Contact){


  }

  createForm(){
    this.contactForm = this.fb.group({
      email: [''],
      name: [''],
      text: ['']
    });
  }



}
