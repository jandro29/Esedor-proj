import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberstratComponent } from './cyberstrat.component';

describe('CyberstratComponent', () => {
  let component: CyberstratComponent;
  let fixture: ComponentFixture<CyberstratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberstratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberstratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
