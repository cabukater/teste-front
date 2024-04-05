import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeviceRegisterComponent } from './device-register/device-register.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DevicesComponent } from './devices.component';


@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceRegisterComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],

})
export class DeviceModule { }
