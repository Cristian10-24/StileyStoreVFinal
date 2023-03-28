import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesPerfilComponent } from './direcciones-perfil.component';

describe('DireccionesPerfilComponent', () => {
  let component: DireccionesPerfilComponent;
  let fixture: ComponentFixture<DireccionesPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionesPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionesPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
