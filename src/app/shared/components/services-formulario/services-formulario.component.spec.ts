import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFormularioComponent } from './services-formulario.component';

describe('ServicesFormularioComponent', () => {
  let component: ServicesFormularioComponent;
  let fixture: ComponentFixture<ServicesFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
