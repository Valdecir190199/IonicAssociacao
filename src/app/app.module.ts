import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB4pWDY8xOrZkjDieKFAfcmlC3bJqthI08",
      authDomain: "registro-cbe24.firebaseapp.com",
      databaseURL: "https://registro-cbe24.firebaseio.com",
      projectId: "registro-cbe24",
      storageBucket: "registro-cbe24.appspot.com",
      messagingSenderId: "917165089231",
      appId: "1:917165089231:web:030b351b59b13402"

    }),AngularFireDatabaseModule
  
  
  ],
  providers: [
  StatusBar,
  SplashScreen,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
