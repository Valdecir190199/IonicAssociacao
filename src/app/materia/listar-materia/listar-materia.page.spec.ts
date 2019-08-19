import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMateriaPage } from './listar-materia.page';

describe('ListarMateriaPage', () => {
  let component: ListarMateriaPage;
  let fixture: ComponentFixture<ListarMateriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMateriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
