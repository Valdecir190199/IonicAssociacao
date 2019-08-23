import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Curso } from '../../curso/entidade/curso';
import { Materia } from '../entidade/materia';

@Component({
  selector: 'app-salvar-materia',
  templateUrl: './salvar-materia.page.html',
  styleUrls: ['./salvar-materia.page.scss'],
})
export class SalvarMateriaPage implements OnInit {

  materia: Materia = new Materia();
  listaCurso: Observable<Curso[]>;

  constructor(private fire:AngularFireDatabase, private rota:Router) { 
    this.listaCurso = this.fire.list<Curso>('curso').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({key: linha.payload.key, ...linha.payload.val()})))
    );

  }

  salvar(){
    this.fire.list('materia').push(this.materia);
    this.materia = new Materia();
    this.rota.navigate(['pagina']);
  }

  ngOnInit() {
  }

}
