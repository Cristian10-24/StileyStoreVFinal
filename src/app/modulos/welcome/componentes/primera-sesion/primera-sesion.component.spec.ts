import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraSesionComponent } from './primera-sesion.component';

describe('PrimeraSesionComponent', () => {
  let component: PrimeraSesionComponent;
  let fixture: ComponentFixture<PrimeraSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeraSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
