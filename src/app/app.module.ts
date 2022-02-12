import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QrCodeModule } from 'ng-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenQRComponent } from './components/gen-qr/gen-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    GenQRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
