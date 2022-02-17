import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { GenQRComponent } from './components/gen-qr/gen-qr.component';
import { RedimirComponent } from './components/redimir/redimir.component';

const routes: Routes = [
  { path: '', component: FormComponent, pathMatch: 'full'},
  { path: 'home', component: FormComponent },
  { path: 'qrgen', component: GenQRComponent },
  { path: 'redime/:id', component: RedimirComponent },
  { path: 'qrgen/:id', component: RedimirComponent },
  { path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
