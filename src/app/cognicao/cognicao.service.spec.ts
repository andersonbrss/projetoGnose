import { TestBed, inject } from '@angular/core/testing';

import { CognicaoService } from './cognicao.service';

describe('CognicaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognicaoService]
    });
  });

  it('should be created', inject([CognicaoService], (service: CognicaoService) => {
    expect(service).toBeTruthy();
  }));
});
