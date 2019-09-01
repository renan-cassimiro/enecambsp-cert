import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPresencaPage } from './lista-presenca.page';

describe('ListaPresencaPage', () => {
  let component: ListaPresencaPage;
  let fixture: ComponentFixture<ListaPresencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPresencaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPresencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
