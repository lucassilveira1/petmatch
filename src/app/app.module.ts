import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, provideEnvironmentNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule { }
