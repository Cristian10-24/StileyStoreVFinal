import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CservicioComponent } from './cservicio.component';

describe('CservicioComponent', () => {
  let component: CservicioComponent;
  let fixture: ComponentFixture<CservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
