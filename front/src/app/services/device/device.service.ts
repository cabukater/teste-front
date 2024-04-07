import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorHandlerService } from '../error/error-handler.service';
import { Device } from 'src/app/models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private devicesSubject = new BehaviorSubject<Device[]>([]);
  devices$ = this.devicesSubject.asObservable();

  private apiUrl = 'http://localhost:5000/api/device'; 
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService 
  ) { }

  getDevices(): Observable<Device[]> {
   return this.http.get<Device[]>(this.apiUrl)
  }

  updateDevice(id: string, device: Device): Observable<Device> {
    return this.http.put<Device>(`${this.apiUrl}/${id}`, device).pipe(
      catchError(this.errorHandler.handleError)
    );
  }
  
  deleteDevice(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  addDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(this.apiUrl, device);
  }


}
