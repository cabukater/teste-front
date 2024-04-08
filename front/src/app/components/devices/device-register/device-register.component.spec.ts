import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRegisterComponent } from './device-register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DeviceRegisterComponent', () => {
  let component: DeviceRegisterComponent;
  let fixture: ComponentFixture<DeviceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceRegisterComponent ],
      imports:[HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
