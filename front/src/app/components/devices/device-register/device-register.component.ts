import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
  cancelShow!: boolean;
  @ViewChild('formElement') formElement!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private updateDevice: UpdateDeviceService,
    private deviceService: DeviceService,
    private renderer: Renderer2
  ) {
    this.deviceForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      manufacturer: ['', Validators.required]
    });

    if (this.device) {
      this.changeText = 'Editar';
      this.deviceForm.patchValue(this.device);
      this.cancelShow = true;
      this.highlightForm();

    } else {
      this.cancelShow = false
    }
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['device'] && this.device) {
      this.changeText = 'Editar';
      this.deviceForm.patchValue(this.device);
      this.deviceForm.controls['id'].setValue(this.device.id);
      this.cancelShow = true;
      setTimeout(() => this.formElement.nativeElement.scrollIntoView({ behavior: 'smooth' }), 0);

    }
  }

  submitForm(): void {
    if (this.deviceForm.valid) {
      const deviceData = this.deviceForm.value;

      if (this.device && this.device.id) {
        this.deviceService.updateDevice(deviceData.id, deviceData).subscribe({
          next: () => {
            Swal.fire('Atualizado', 'Dispositivo atualizado com sucesso!', 'success');
            this.deviceForm.reset();
            this.updateDevice.notifyDeviceUpdate();

            this.device = null;
          },
          error: () => Swal.fire('Erro', 'Não foi possível atualizar o dispositivo.', 'error')
        });
      } else {
        this.deviceService.addDevice(deviceData).subscribe({
          next: () => {
            Swal.fire('Registrado', 'Dispositivo registrado com sucesso!', 'success');
            this.deviceForm.reset();
            this.changeText = 'Registrar';
            this.cancelShow = false
            this.updateDevice.notifyDeviceUpdate();

          },
          error: () => Swal.fire('Erro', 'Não foi possível registrar o dispositivo.', 'error')
        });
      }
    } else {
      Swal.fire('Erro', 'Por favor, preencha todos os campos corretamente.', 'error');
    }
  }

  highlightForm(): void {
    const form = this.formElement.nativeElement;
    this.renderer.addClass(form, 'form-highlight');
    setTimeout(() => this.renderer.removeClass(form, 'form-highlight'), 2000);
  }

  cancel() {
    this.deviceForm.reset();
    this.changeText = 'Registrar';
    this.cancelShow = false
  }
}

