import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Login bem-sucedido!',
            text: 'Você será redirecionado para a página de dispositivos.',
            timer: 2000,
            timerProgressBar: true,
          }).then(() => {
            this.router.navigate(['/devices']);
          });
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Erro no login',
            text: 'Usuário ou senha incorretos. Por favor, tente novamente.',
          });
          console.error('Erro na autenticação', err);
        }
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulário inválido',
        text: 'Por favor, preencha todos os campos obrigatórios.',
      });
    }
  }
}
