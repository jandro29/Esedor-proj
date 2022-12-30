import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaxBlackofficeComponent } from './primax-blackoffice.component';

describe('PrimaxBlackofficeComponent', () => {
  let component: PrimaxBlackofficeComponent;
  let fixture: ComponentFixture<PrimaxBlackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaxBlackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaxBlackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
