import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://localhost:8080/login"

  constructor(  
    private http:HttpClient 
  ) { }

  login (nome: string, senha:string): Observable<any>{
    console.log('login')
    const data = { email:nome, password:senha}
    return this.http.post(`${this.apiUrl}`, data)
  }
  saveToken(token: string): void {       
    localStorage.setItem('token', token);
  }

  getToken(): string | null {                   
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {                     
    return !!this.getToken();
  }

  saveRole(role: string): void {
    localStorage.setItem('role', role)
  }
  getRole(): string | null {
    return localStorage.getItem('role')
  }

}
