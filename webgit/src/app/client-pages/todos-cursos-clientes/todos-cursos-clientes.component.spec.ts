import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCursosClientesComponent } from './todos-cursos-clientes.component';

describe('TodosCursosClientesComponent', () => {
  let component: TodosCursosClientesComponent;
  let fixture: ComponentFixture<TodosCursosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosCursosClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosCursosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
