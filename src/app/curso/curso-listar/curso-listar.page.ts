import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Curso } from '../entidade/curso';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.page.html',
  styleUrls: ['./curso-listar.page.scss'],
})
export class CursoListarPage implements OnInit {

  listaCursos$: Observable<Curso[]>;

  buscarCurso: string;

  constructor(private fire:AngularFireDatabase) {
    this.listaCursos$ = this.fire.list<Curso>('curso').snapshotChanges().pipe(
      map (lista => lista.map (linha=> ({key:linha.payload.key,...linha.payload.val()})))
    );
   }

  excluir(key: string, curso: Curso) {
    this.fire.object('curso/' + key).remove();
    this.fire.object('message/' + key).remove();
  }

  ngOnInit() {
  }

  buscar(){ 
    
    if(this.buscarCurso != null){
      this.listaCursos$ = this.fire.list<Curso>('curso', ref => ref.orderByChild("nome").equalTo(this.buscarCurso)).snapshotChanges().pipe(
        map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
      );
    }else{

      this.listaCursos$ = this.fire.list<Curso>('curso',ref => ref.orderByChild("nome").equalTo("TADS")).snapshotChanges().pipe(
        map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
      );
      
    }
    
    
  }

}
