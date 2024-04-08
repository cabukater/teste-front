import { TestBed } from '@angular/core/testing';

import { UpdateDeviceService } from './update-device.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdateDeviceService', () => {
  let service: UpdateDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(UpdateDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
