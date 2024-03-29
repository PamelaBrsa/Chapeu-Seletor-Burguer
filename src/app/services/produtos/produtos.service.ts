import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient, private authService: LoginService) { } //permite usar o HttpClient para fazer chamadas HTTP para a API.

  getProductsByType(): Observable<any> { //usa o método get do HttpClient para fazer uma requisição HTTP GET para a URL composta pela base apiUrl concatenada com o tipo de produto selecionado
    const token = this.authService.getToken(); // Obtenha o token do AuthService

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${token}` // Usa o token obtido do AuthService
      })
    };
    return this.http.get(`${this.apiUrl}`, httpOptions);
  }

  getProducts(): Observable<any[]> { //usa o método get do HttpClient para fazer uma requisição HTTP GET para a URL composta pela base apiUrl concatenada com o tipo de produto selecionado
    const token = this.authService.getToken(); // Obtenha o token do AuthService

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${token}` // Usa o token obtido do AuthService
      })
    };
    return this.http.get<any[]>(`${this.apiUrl}`, httpOptions);
  }

  editProduct(product: any): Observable<any> {
    const token = this.authService.getToken(); // Obtenha o token do AuthService

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${token}` // Usa o token obtido do AuthService
      })
    };
    return this.http.patch<any>(`${this.apiUrl}/${product.id}`,product, httpOptions)
  }
}