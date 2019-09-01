import { TestBed } from '@angular/core/testing';

import { DiaEventoService } from './dia-evento.service';

describe('DiaEventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiaEventoService = TestBed.get(DiaEventoService);
    expect(service).toBeTruthy();
  });
});
