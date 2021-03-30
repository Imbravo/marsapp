import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private firestore: AngularFirestore) { }

  createSubmission(data:any){
    return new Promise<any>((resolve,reject)=>{
      this.firestore
        .collection("submissions")
        .add(data)
        .then(res=>{},err=>reject(err))
    });
  }


}
