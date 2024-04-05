import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device/device.service';

// Representa a estrutura esperada da resposta da API
interface ApiResponse {
  devices: Device[];
}

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  devices: Device[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
     this.getDevices()
   
  }

  getDevices(){
    this.deviceService.getDevices().subscribe({
      next: (devices) => {
        this.devices = devices;
        console.log(devices)
      },
      error: (error) => {
        console.error('Erro ao obter dispositivos', error);
      }
    });
  }
}
