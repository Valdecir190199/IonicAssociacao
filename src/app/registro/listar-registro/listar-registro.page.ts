import { Component, OnInit } from '@angular/core';
import { Registro } from '../entidade/registro';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-registro',
  templateUrl: './listar-registro.page.html',
  styleUrls: ['./listar-registro.page.scss'],
})
export class ListarRegistroPage implements OnInit {



  ngOnInit() {
  }

  listaRegistro: Observable<Registro[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaRegistro = this.fire.list<Registro>('registro').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }

}
