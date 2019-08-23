import { Component, OnInit } from '@angular/core';
import { Curso } from '../entidade/curso';
import {AngularFireDatabase} from "@angular/fire/database";
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-salvar-curso',
  templateUrl: './salvar-curso.page.html',
  styleUrls: ['./salvar-curso.page.scss'],
})
export class SalvarCursoPage implements OnInit {

  curso: Curso = new Curso();
  key: string;
  error: string;


  constructor(private banco: AngularFireDatabase, private rota: Router, private route: ActivatedRoute,) { }
 

  ngOnInit() {

 


  }

  salvar(): void {

    if (this.validForm()) {
      if (this.key) {
        this.banco.object('curso/' + this.key).update(this.curso);
      } else {
        this.banco.list('curso').push(this.curso);
      }

      this.curso = new Curso();
      this.rota.navigate(['curso-listar']);
    }

  }



  validForm(): Boolean {
    if (this.curso.nome && this.curso.ano) {
      this.error = "";
      return true;
    } else {
      this.error = "Preencha todos os campos";
      return false;
    }
  }
  

}
