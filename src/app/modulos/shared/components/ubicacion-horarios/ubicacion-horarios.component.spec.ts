import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionHorariosComponent } from './ubicacion-horarios.component';

describe('UbicacionHorariosComponent', () => {
  let component: UbicacionHorariosComponent;
  let fixture: ComponentFixture<UbicacionHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionHorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
