import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { NotFoundModule } from './modules/notFound/notFound.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { HeaderComponent } from "./layout/header/header.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HomeModule,
    LoginModule,
    NotFoundModule,
    HeaderComponent,

    HttpClientModule,
    CommonModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
