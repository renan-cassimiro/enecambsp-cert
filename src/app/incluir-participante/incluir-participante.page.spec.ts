import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirParticipantePage } from './incluir-participante.page';

describe('IncluirParticipantePage', () => {
  let component: IncluirParticipantePage;
  let fixture: ComponentFixture<IncluirParticipantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirParticipantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
