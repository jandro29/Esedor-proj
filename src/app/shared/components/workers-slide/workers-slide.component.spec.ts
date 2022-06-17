import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersSlideComponent } from './workers-slide.component';

describe('WorkersSlideComponent', () => {
  let component: WorkersSlideComponent;
  let fixture: ComponentFixture<WorkersSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
