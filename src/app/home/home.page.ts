import { Component } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: Usuario = new Usuario();

  error: string = "";
  constructor(private afAuth: AngularFireAuth, private router: Router){}

  
  logar(): void{
    if (this.validForm()) {
   
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then((res) => {
      this.error = "";
      this.router.navigate(['pagina']);
    }).catch((erro) => {
      this.error = "Email ou senha inválidos";
      console.log(erro);
    });
  }
}

  redefinePwd(): void {
    if (this.usuario.email) {
      this.error = "";
      this.afAuth.auth.sendPasswordResetEmail(this.usuario.email)
        .then((res) => alert('Email enviado!'))
        .catch((err) => console.log(err));
    } else {
      this.error = "Preencha o campo email!";
    }
  }

  validForm(): Boolean {
    if (this.usuario.email && this.usuario.senha) {
      this.error = "";
      return true;
    } else {
      this.error = "Preencha todos os campos!";
      return false;
    }
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
