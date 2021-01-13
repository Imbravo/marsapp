import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageService } from '../../src/app/services/language.service'
const routes: Routes = [{ path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
