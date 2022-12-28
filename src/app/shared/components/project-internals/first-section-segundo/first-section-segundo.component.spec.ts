import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSectionSegundoComponent } from './first-section-segundo.component';

describe('FirstSectionSegundoComponent', () => {
  let component: FirstSectionSegundoComponent;
  let fixture: ComponentFixture<FirstSectionSegundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSectionSegundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSectionSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
