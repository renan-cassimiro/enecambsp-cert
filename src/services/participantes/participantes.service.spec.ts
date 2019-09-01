import { TestBed } from '@angular/core/testing';

import { ParticipantesService } from './participantes.service';

describe('ParticipantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipantesService = TestBed.get(ParticipantesService);
    expect(service).toBeTruthy();
  });
});
