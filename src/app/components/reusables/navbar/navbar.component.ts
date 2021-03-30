import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
  }

  //Sets the current selected language in localstorage and uses ngx-translate service to translate. 
  //Params: String from event. 
  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.translate.use(language);
    localStorage.setItem('lang',language);
  }


}
