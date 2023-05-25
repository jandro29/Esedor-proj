import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroBenefComponent } from './cuadro-benef.component';

describe('CuadroBenefComponent', () => {
  let component: CuadroBenefComponent;
  let fixture: ComponentFixture<CuadroBenefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroBenefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroBenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
