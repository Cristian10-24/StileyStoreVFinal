import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeotodoCompraComponent } from './meotodo-compra.component';

describe('MeotodoCompraComponent', () => {
  let component: MeotodoCompraComponent;
  let fixture: ComponentFixture<MeotodoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeotodoCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeotodoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
