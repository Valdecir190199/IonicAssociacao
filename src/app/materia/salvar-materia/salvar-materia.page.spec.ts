import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarMateriaPage } from './salvar-materia.page';

describe('SalvarMateriaPage', () => {
  let component: SalvarMateriaPage;
  let fixture: ComponentFixture<SalvarMateriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarMateriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
