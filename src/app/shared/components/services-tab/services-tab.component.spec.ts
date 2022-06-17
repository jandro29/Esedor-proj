import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTabComponent } from './services-tab.component';

describe('ServicesTabComponent', () => {
  let component: ServicesTabComponent;
  let fixture: ComponentFixture<ServicesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
