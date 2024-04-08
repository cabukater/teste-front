import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:5000/api/login'; 
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { username, password }).pipe(
      map((res: { token: string; username: string }) => {
        localStorage.setItem('token', res.token); 
        localStorage.setItem('username', res.username); 
      }),
      catchError(error => {
        console.error('Erro no serviço de autenticação', error)
        return throwError(error);
      })
    );
  }

  logout() {
    localStorage.removeItem('token'); // {5}
    localStorage.removeItem('usernmae'); // {5}
    this.loggedIn.next(false); // {6}
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token'); // {7}
  }
}
