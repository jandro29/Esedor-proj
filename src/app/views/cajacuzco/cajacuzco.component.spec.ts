import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajacuzcoComponent } from './cajacuzco.component';

describe('CajacuzcoComponent', () => {
  let component: CajacuzcoComponent;
  let fixture: ComponentFixture<CajacuzcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajacuzcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajacuzcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
