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

  logar(): void {
    this.authService.login(this.nome, this.senha).subscribe(
      (response) => {
        console.log(response)
        const token = response.accessToken;
        const role = response.user.role

        this.authService.saveRole(role)
        console.log(role)
        this.authService.saveToken(token)

        this.router.navigate(['/menu'])

      }
    )
  }
}
  // (error) = {
  //   console.error('Erro no login', error)
  //   this.loginError = true;
  //   this.errorMessage = 'Credenciais inválidas. Verifique seu e-mail e senha.';
  // }
