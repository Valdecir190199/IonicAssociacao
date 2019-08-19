import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarMateriaPage } from './salvar-materia.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarMateriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarMateriaPage]
})
export class SalvarMateriaPageModule {}
