import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaPage } from './cronograma.page';

describe('CronogramaPage', () => {
  let component: CronogramaPage;
  let fixture: ComponentFixture<CronogramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronogramaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
