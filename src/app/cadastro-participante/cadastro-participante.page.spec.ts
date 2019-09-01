import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroParticipantePage } from './cadastro-participante.page';

describe('CadastroParticipantePage', () => {
  let component: CadastroParticipantePage;
  let fixture: ComponentFixture<CadastroParticipantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroParticipantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
