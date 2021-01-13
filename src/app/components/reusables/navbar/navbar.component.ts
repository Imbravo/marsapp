import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../../../services/language.service'
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

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    //console.log(this.languageService.getLanguage());
    this.translate.use(language);

    this.translate.onLangChange.subscribe(() => {
      // do something
      //console.log('test');
    });


  }




}
