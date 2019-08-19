import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Registro } from '../entidade/registro';
import { Materia } from 'src/app/materia/entidade/materia';
@Component({
  selector: 'app-salvar-registro',
  templateUrl: './salvar-registro.page.html',
  styleUrls: ['./salvar-registro.page.scss'],
})
export class SalvarRegistroPage implements OnInit {

  registro: Registro = new Registro();
  listaMateria: Observable<Materia[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router) {

    this.listaMateria = this.fire.list<Materia>('materia').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );

   }
   salvar(){
    this.fire.list('registro').push(this.registro);
    this.registro = new Registro();
    this.rota.navigate(['listar-registro']);
    this.registro.materia = this.registro.materia;
    }
  ngOnInit() {
  }

}
