import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device/device.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { UpdateDeviceService } from 'src/app/services/device/update-device.service';



@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  devices: Device[] = [];
  @Output() deviceToEdit = new EventEmitter<Device>();
  selectedDevice: Device | null = null;

  private updateSubscription!: Subscription;

  constructor(
    private updateDevice :  UpdateDeviceService,
    private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.getDevices();
    this.updateSubscription = this.updateDevice.deviceUpdate$.subscribe(() => {
      this.getDevices();
    });
  }


  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }


  getDevices(): void {
    this.deviceService.getDevices().subscribe({
      next: (devices) => {
        this.devices = devices;
      },
      error: (error) => {
        console.error('Erro ao obter dispositivos', error);
      }
    });
  }
  editDevice(device: Device): void {
    this.selectedDevice = device;
    this.deviceToEdit.emit(device);
  }

  deleteDevice(device: Device): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deviceService.deleteDevice(device.id).subscribe({
          next: () => {
            this.getDevices();
            Swal.fire('Deletado!', 'O dispositivo foi deletado.', 'success');
          },
          error: (error) => {
            Swal.fire('Erro!', 'Não foi possível deletar o dispositivo.', 'error');
          }
        });
      }
    });
  }
}
