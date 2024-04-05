import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DeviceService } from './services/device/device.service';
import { DeviceListComponent } from './components/devices/device-list/device-list.component';
import { AuthGuard } from './services/auth/auth.guard';
import { DevicesComponent } from './components/devices/devices.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'devices', component: DevicesComponent, canActivate: [AuthGuard]  },
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
