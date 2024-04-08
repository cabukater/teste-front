import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SeuComponenteOuServico', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Adiciona o HttpClientTestingModule aqui
      providers: [AuthService, HttpClient] // Providencia o AuthService
    }).compileComponents();
  });

  it('deve criar', () => {
    const service: AuthService = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });

  // Adicione mais testes conforme necessário
});
