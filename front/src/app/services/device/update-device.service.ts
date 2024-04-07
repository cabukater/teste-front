import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDeviceService {

  private deviceUpdateSubject = new Subject<void>();
  deviceUpdate$ = this.deviceUpdateSubject.asObservable();

  notifyDeviceUpdate() {
    this.deviceUpdateSubject.next();
  }
}
