import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/services/device/device.service';
import { Device } from 'src/app/models/device.model';
import Swal from 'sweetalert2';
import { UpdateDeviceService } from 'src/app/services/device/update-device.service';

@Component({
  selector: 'app-device-register',
  templateUrl: './device-register.component.html',
  styleUrls: ['./device-register.component.scss']
})
export class DeviceRegisterComponent implements OnInit, OnChanges {
  deviceForm: FormGroup;
  @Input() devices: Device[] | null = null;
  @Input() device: Device | null = null;
  changeText = 'Registrar';
  @Output() updateSuccess = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
   private updateDevice: UpdateDeviceService , 
    private deviceService: DeviceService
  ) {
    this.deviceForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: ['', Validators.required],
      manufacturer: ['', Validators.required]
    });

    if (this.device) {
      this.changeText = 'Editar';
      this.deviceForm.patchValue(this.device);
    }
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['device'] && this.device) {
      this.changeText = 'Editar';
      this.deviceForm.patchValue(this.device);
    }
  }

  submitForm(): void {
    if (this.deviceForm.valid) {
      const deviceData = this.deviceForm.value;

      if (this.device && this.device.id) {
        // Atualiza o dispositivo existente
        this.deviceService.updateDevice(this.device.id, deviceData).subscribe({
          next: () => {
            Swal.fire('Atualizado', 'Dispositivo atualizado com sucesso!', 'success');
            this.deviceForm.reset();
            this.device = null; // Resetar o dispositivo sendo editado
          },
          error: () => Swal.fire('Erro', 'Não foi possível atualizar o dispositivo.', 'error')
        });
      } else {
        // Adiciona um novo dispositivo
        this.deviceService.addDevice(deviceData).subscribe({
          next: () => {
            Swal.fire('Registrado', 'Dispositivo registrado com sucesso!', 'success');
            this.deviceForm.reset();
            this.updateDevice.notifyDeviceUpdate();

          },
          error: () => Swal.fire('Erro', 'Não foi possível registrar o dispositivo.', 'error')
        });
      }
    } else {
      Swal.fire('Erro', 'Por favor, preencha todos os campos corretamente.', 'error');
    }
  }
}