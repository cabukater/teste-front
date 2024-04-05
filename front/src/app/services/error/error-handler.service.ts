import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  public handleError(error: HttpErrorResponse | any): Observable<never> {
    let errorMessage: string;
    if (error instanceof HttpErrorResponse) {
      // Erro do servidor
      errorMessage = `Erro ${error.status}: ${error.message}`;
      // Erro do cliente ou outro
      errorMessage = error.message ? error.message : error.toString();
    }
    console.error(async (params:string) => {
      errorMessage
    });
    return throwError(async (params:string) => {
      errorMessage
    });
  }
}
