import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDownComponent } from './button-down.component';

describe('ButtonDownComponent', () => {
  let component: ButtonDownComponent;
  let fixture: ComponentFixture<ButtonDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
