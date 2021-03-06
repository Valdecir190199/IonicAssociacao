import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pagina', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar', loadChildren: './estado/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar', loadChildren: './estado/listar/listar.module#ListarPageModule' },
  { path: 'cidade-salvar', loadChildren: './cidade/salvar/salvar.module#SalvarPageModule' },
  { path: 'cidade-listar', loadChildren: './cidade/listar/listar.module#ListarPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'salvar-curso', loadChildren: './curso/salvar-curso/salvar-curso.module#SalvarCursoPageModule' },
  { path: 'curso-listar', loadChildren: './curso/curso-listar/curso-listar.module#CursoListarPageModule' },
  { path: 'salvar-materia', loadChildren: './materia/salvar-materia/salvar-materia.module#SalvarMateriaPageModule' },
  { path: 'listar-materia', loadChildren: './materia/listar-materia/listar-materia.module#ListarMateriaPageModule' },
  { path: 'salvar-registro', loadChildren: './registro/salvar-registro/salvar-registro.module#SalvarRegistroPageModule' },
  { path: 'listar-registro', loadChildren: './registro/listar-registro/listar-registro.module#ListarRegistroPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
