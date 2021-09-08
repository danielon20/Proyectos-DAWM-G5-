import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriFormComponent } from './inscri-form.component';

describe('InscriFormComponent', () => {
  let component: InscriFormComponent;
  let fixture: ComponentFixture<InscriFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
