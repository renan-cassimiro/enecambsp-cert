import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarPage } from './entrar.page';

describe('EntrarPage', () => {
  let component: EntrarPage;
  let fixture: ComponentFixture<EntrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
