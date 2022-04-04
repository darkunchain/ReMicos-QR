import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QrCodeModule } from 'ng-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenQRComponent } from './components/gen-qr/gen-qr.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RedimirComponent } from './components/redimir/redimir.component';
import { MaterializeButtonModule, MaterializeCardModule, MaterializeInputModule } from 'materialize-angular';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    GenQRComponent,
    FormComponent,
    HeaderComponent,
    RedimirComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterializeButtonModule,
    MaterializeCardModule,
    MaterializeInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
