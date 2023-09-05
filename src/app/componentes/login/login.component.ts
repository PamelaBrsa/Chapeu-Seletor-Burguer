import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome: string = '';
  senha: string = '';
  loginError: boolean = false;

  constructor(private authService: LoginService, private router: Router) { }

  //   async logar (){
  //     try {
  //       this.loginError = false;
  //       const usuarioLogado = await this.authService.login(this.nome, this.senha);
  //       console.log(usuarioLogado)
  //       if(usuarioLogado){
  //         const usuario = localStorage.getItem('usuario');
  //         switch(usuario){
  //           case 'admin':
  //             this.router.navigate(['/menu'])
  //             break;

  //         }
  //       } else {
  //         this.loginError = true;
  //         throw new Error ('Login Inválido');
  //       }
  //     } catch (error) {
  //       console.error ('Error no login:', error);
  //       this.loginError = true;
  //     }
  //   }
  // }



  logar(): void {
    this.authService.login(this.nome, this.senha).subscribe(
      (response) => {
        console.log(response)
        const token = response.accessToken;
        const role = response.user.role

        this.authService.saveRole(role)
        console.log(role)
        this.authService.saveToken(token)

        this.router.navigate(['/home'])

      }
    )
  }
}
  // (error) = {
  //   console.error('Erro no login', error)
  //   this.loginError = true;
  //   this.errorMessage = 'Credenciais inválidas. Verifique seu e-mail e senha.';
  // }
