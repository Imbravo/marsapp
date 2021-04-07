import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NavbarComponent } from './components/reusables/navbar/navbar.component';
import { FooterComponent } from './components/reusables/footer/footer.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './components/contact/contact.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { TilestopComponent } from './components/products/tilestop/tilestop.component';
import { CountertopscabinetsComponent } from './components/products/countertopscabinets/countertopscabinets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BathtubeRefinishingComponent } from './components/product-services/bathtube-refinishing/bathtube-refinishing.component';
import { BathtubeReglazingComponent } from './components/product-services/bathtube-reglazing/bathtube-reglazing.component';
import { ReglaseTilesComponent } from './components/product-services/reglase-tiles/reglase-tiles.component';
import { ContertopsComponent } from './components/product-services/contertops/contertops.component';
import { VanityComponent } from './components/product-services/vanity/vanity.component';
import { ProductsUsedComponent } from './components/products-used/products-used.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { QuotesComponent } from './components/quotes/quotes.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    BathtubeRefinishingComponent,
    BathtubeReglazingComponent,
    ReglaseTilesComponent,
    ContertopsComponent,
    VanityComponent,
    ProductsUsedComponent,
    AboutUsComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }}),
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
