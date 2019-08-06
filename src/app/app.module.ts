import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight);
library.add(faChevronLeft);

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, NavigationComponent, AboutusComponent, PhilosophyComponent, ContactUsComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
