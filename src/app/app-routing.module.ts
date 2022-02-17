import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { GenQRComponent } from './components/gen-qr/gen-qr.component';
import { RedimirComponent } from './components/redimir/redimir.component';

const routes: Routes = [
  { path: 'home', component: FormComponent },
  { path: '', component: FormComponent },
  { path: 'qrgen', component: GenQRComponent },
  { path: 'redime', component: RedimirComponent },
  { path: 'qrgen/:id', redirectTo: '/redime', pathMatch: 'prefix' },
  { path: '**', redirectTo: '/redime' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
