import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarCursoPage } from './salvar-curso.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarCursoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarCursoPage]
})
export class SalvarCursoPageModule {}
