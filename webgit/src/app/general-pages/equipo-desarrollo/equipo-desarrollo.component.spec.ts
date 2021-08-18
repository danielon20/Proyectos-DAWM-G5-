import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoDesarrolloComponent } from './equipo-desarrollo.component';

describe('EquipoDesarrolloComponent', () => {
  let component: EquipoDesarrolloComponent;
  let fixture: ComponentFixture<EquipoDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoDesarrolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
