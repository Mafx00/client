import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 // { path: '**', component: NavComponent},
 // { path: 'batches-component', component : BatchesComponent },
 // { path: 'create-component', component : CreateComponent },
 // { path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
