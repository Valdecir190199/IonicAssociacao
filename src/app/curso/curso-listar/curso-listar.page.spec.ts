import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListarPage } from './curso-listar.page';

describe('CursoListarPage', () => {
  let component: CursoListarPage;
  let fixture: ComponentFixture<CursoListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoListarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
