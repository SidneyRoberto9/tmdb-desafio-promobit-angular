import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/home components/header/header.component';
import { CardComponent } from './components/home components/card/card.component';
import { DisplayCardComponent } from './components/home components/display-card/display-card.component';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { HearderLogoComponent } from './components/detalhes components/hearder-logo/hearder-logo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    DisplayCardComponent,
    DetailsComponent,
    HearderLogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
