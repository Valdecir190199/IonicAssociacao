import { Component, OnInit } from '@angular/core';
import { Curso } from '../entidade/curso';
import {AngularFireDatabase} from "@angular/fire/database";
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar-curso',
  templateUrl: './salvar-curso.page.html',
  styleUrls: ['./salvar-curso.page.scss'],
})
export class SalvarCursoPage implements OnInit {

  curso: Curso = new Curso();



  constructor(private banco: AngularFireDatabase, private rota: Router) { }
  salvar(){
    this.banco.list('curso').push(this.curso);
    this.curso = new Curso();
    this.rota.navigate(['curso-listar']);
    alert("salvo com sucesso");
  }
  ngOnInit() {
  }

}
