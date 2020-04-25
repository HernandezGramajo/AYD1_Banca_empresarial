import { TestBed } from '@angular/core/testing';

import { EmpresaServicesService } from './empresa-services.service';

describe('EmpresaServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpresaServicesService = TestBed.get(EmpresaServicesService);
    expect(service).toBeTruthy();
  });
});
