import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

// product services
import { BathtubeRefinishingComponent } from './components/product-services/bathtube-refinishing/bathtube-refinishing.component';
import { BathtubeReglazingComponent } from './components/product-services/bathtube-reglazing/bathtube-reglazing.component';
import { ContertopsComponent } from './components/product-services/contertops/contertops.component';
import { ReglaseTilesComponent } from './components/product-services/reglase-tiles/reglase-tiles.component';
import { VanityComponent } from './components/product-services/vanity/vanity.component';

//Products used
import { ProductsUsedComponent } from './components/products-used/products-used.component';

//About us
import { AboutUsComponent } from './components/about-us/about-us.component';

//Quotes
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bathtube-refinishing', component: BathtubeRefinishingComponent },
  { path: 'bathtube-reglazing', component: BathtubeReglazingComponent },
  { path: 'countertops', component: ContertopsComponent },
  { path: 'tiles-reglazing', component: ReglaseTilesComponent },
  { path: 'vanity-reglazing', component: VanityComponent },
  { path: 'products-used', component: ProductsUsedComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'quotes', component: QuotesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
