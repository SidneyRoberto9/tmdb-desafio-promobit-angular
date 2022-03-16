import { NgCircleProgressModule } from 'ng-circle-progress';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    CardElencoComponent
} from './components/detalhes components/card-elenco/card-elenco.component';
import { DetalhesComponent } from './components/detalhes components/detalhes/detalhes.component';
import {
    HearderLogoComponent
} from './components/detalhes components/hearder-logo/hearder-logo.component';
import { CardComponent } from './components/home components/card/card.component';
import {
    DisplayCardComponent
} from './components/home components/display-card/display-card.component';
import { HeaderComponent } from './components/home components/header/header.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    DisplayCardComponent,
    DetailsComponent,
    HearderLogoComponent,
    DetalhesComponent,
    CardElencoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
