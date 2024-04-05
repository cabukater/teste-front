import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device/device.service';


@Component({
  selector: 'app-device-register',
  templateUrl: './device-register.component.html',
  styleUrls: ['./device-register.component.scss']
})
export class DeviceRegisterComponent {
  deviceForm: FormGroup;
  devices: Device[] = [];

  constructor(private fb: FormBuilder, private deviceService: DeviceService) {
    this.deviceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      manufacturer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadDevices();
  }

  addDevice(): void {
    if (this.deviceForm.valid) {
      this.deviceService.addDevice(this.deviceForm.value).subscribe(() => {
        this.deviceForm.reset();
        this.loadDevices();
      });
    }
  }

  loadDevices(): void {
    this.deviceService.getDevices().subscribe(devices => {
      this.devices = devices;
    });
  }
}