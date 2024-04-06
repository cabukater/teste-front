import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  username: string | null = '';

  constructor(public authService: AuthService) {
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('username'); // Limpar o username do localStorage ao sair
  }
}