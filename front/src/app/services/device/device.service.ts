import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from '../error/error-handler.service';
import { Device } from 'src/app/models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiUrl = 'http://localhost:5000/api/device'; 
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService 
  ) { }

  getDevices(): Observable<Device[]> {
   return this.http.get<Device[]>(this.apiUrl)
  }

  addDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(this.apiUrl, device);
  }

}
