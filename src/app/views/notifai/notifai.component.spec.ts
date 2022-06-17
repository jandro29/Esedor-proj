import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifaiComponent } from './notifai.component';

describe('NotifaiComponent', () => {
  let component: NotifaiComponent;
  let fixture: ComponentFixture<NotifaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
