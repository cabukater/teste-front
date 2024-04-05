import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:5000/api/login'; // Substitua pela URL correta da sua API de autenticação
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { username, password }).pipe(
      map(res => {
        localStorage.setItem('token', res.token); // {2}
        this.loggedIn.next(true); // {3}
        return res;
      }),
      catchError(error => {
        console.error('Erro no serviço de autenticação', error); // {4}
        return throwError(error);
      })
    );
  }

  logout() {
    localStorage.removeItem('token'); // {5}
    this.loggedIn.next(false); // {6}
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token'); // {7}
  }
}
