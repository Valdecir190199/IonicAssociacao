import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Cidade } from '../entidade/cidade';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  listaCidade: Observable<Cidade[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaCidade = this.fire.list<Cidade>('cidade').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }

  ngOnInit() {
  }
}
