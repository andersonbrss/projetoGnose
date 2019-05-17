import { TestBed, inject } from '@angular/core/testing';

import { CamadaService } from './camada.service';

describe('CamadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamadaService]
    });
  });

  it('should be created', inject([CamadaService], (service: CamadaService) => {
    expect(service).toBeTruthy();
  }));
});
