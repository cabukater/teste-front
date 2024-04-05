import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from '../error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  login(username: string, password: string) {
    const url = 'http://localhost:5000/api/login'; // Substitua pela URL correta da sua API de autenticação
    return this.http.post<any>(url, { username, password })
      .pipe(
        tap((res: { token: string; }) => {
          localStorage.setItem('token', res.token);
        }),
        catchError((error) => this.errorHandler.handleError(error))
        );
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  

}
