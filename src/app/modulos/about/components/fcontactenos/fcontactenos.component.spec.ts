import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcontactenosComponent } from './fcontactenos.component';

describe('FcontactenosComponent', () => {
  let component: FcontactenosComponent;
  let fixture: ComponentFixture<FcontactenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcontactenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcontactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
