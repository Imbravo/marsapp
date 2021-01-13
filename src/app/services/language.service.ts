import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string='en';
  constructor() { }

  getLanguage(){
    return this.language;
  }

  setLanguage(newLanguage:string){
    this.language = newLanguage;
  }
}


