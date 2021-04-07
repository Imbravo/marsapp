import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/classes/contact';
import { SubmissionService } from '../../services/sumission.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;


  constructor(firestore: AngularFirestore, private fb: FormBuilder, private submissionService: SubmissionService) {


  }

  ngOnInit(): void {
    this.createForm();
  }


  addContact(contact: Contact) {


  }

  createForm() {
    this.contactForm = this.fb.group({
      email: [''],
      name: [''],
      text: ['']
    });
  }

  onSubmit() {
    this.submissionService.createSubmission(this.contactForm.value);
    //console.log('test submit', this.contactForm.value);

  }

}
