import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { VanityComponent } from './components/products/vanity/vanity.component';
import { CountertopscabinetsComponent } from './components/products/countertopscabinets/countertopscabinets.component';
import { TilestopComponent } from './components/products/tilestop/tilestop.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tilestop', component: TilestopComponent},
  {path: 'countertopcabinet', component: CountertopscabinetsComponent},
  {path: 'vanity', component: VanityComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
