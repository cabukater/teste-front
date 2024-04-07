import { Component, EventEmitter, Output } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent {
  currentDeviceToEdit!: Device ;
  refresh: boolean = false;

  constructor(private deviceService: DeviceService) {}
  onEditDevice(device: Device): void {
    this.currentDeviceToEdit = device;
    
  }

  refreshList(): void {
    this.refresh = !this.refresh; // Alterna o valor para garantir a detecção de mudança
  }

}
