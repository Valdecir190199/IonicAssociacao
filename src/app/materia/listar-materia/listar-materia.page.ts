import { Component, OnInit } from '@angular/core';
import { Materia } from '../entidade/materia';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-materia',
  templateUrl: './listar-materia.page.html',
  styleUrls: ['./listar-materia.page.scss'],
})
export class ListarMateriaPage implements OnInit {
  listaMateria: Observable<Materia[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaMateria = this.fire.list<Materia>('materia').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }
  excluir(key: string, materia: Materia){
    this.fire.object('materia/'+key).remove();
    this.fire.object('message/'+key).remove();
}
busca:string;

  ngOnInit() {
  }

  buscar() {

    if (this.busca != null) {
      this.listaMateria = this.fire.list<Materia>('materia', ref => ref.equalTo(this.busca)).snapshotChanges().pipe(
        map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
      );
    } else {
      this.listaMateria = this.fire.list<Materia>('materia').snapshotChanges().pipe(
        map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
      );
    }


  }
}
