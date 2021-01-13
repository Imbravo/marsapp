import { Component, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private translate: TranslateService, private languageService: LanguageService) { }

  language: string='';

  ngOnInit(): void {
    //console.log(this.languageService.getLanguage());


    
  }





}
