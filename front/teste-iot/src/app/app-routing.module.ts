import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DeviceService } from './services/device/device.service';
import { DeviceListComponent } from './components/device-list/device-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'devices', component: DeviceListComponent },
  { path: 'register-device', component: DeviceService },
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
