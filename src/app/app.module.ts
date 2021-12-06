import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConferencesComponent } from './components/conferences/conferences.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'about', component: AboutComponent },
      { path: 'conferences', component: ConferencesComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
