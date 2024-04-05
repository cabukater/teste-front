import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiUrl = 'URL_DA_SUA_API_AQUI'; 
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService 
  ) { }

  getDevices() {
    return this.http.get('/api/devices').pipe(
      catchError(this.errorHandler.handleError) 
    );
  }
}
