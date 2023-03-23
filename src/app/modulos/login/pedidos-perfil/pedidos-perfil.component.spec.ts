import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosPerfilComponent } from './pedidos-perfil.component';

describe('PedidosPerfilComponent', () => {
  let component: PedidosPerfilComponent;
  let fixture: ComponentFixture<PedidosPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
