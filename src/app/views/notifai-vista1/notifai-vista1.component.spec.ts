import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifaiVista1Component } from './notifai-vista1.component';

describe('NotifaiVista1Component', () => {
  let component: NotifaiVista1Component;
  let fixture: ComponentFixture<NotifaiVista1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifaiVista1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifaiVista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
