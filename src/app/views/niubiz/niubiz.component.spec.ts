import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiubizComponent } from './niubiz.component';

describe('NiubizComponent', () => {
  let component: NiubizComponent;
  let fixture: ComponentFixture<NiubizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiubizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiubizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
