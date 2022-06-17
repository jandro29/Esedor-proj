import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSlideComponent } from './projects-slide.component';

describe('ProjectsSlideComponent', () => {
  let component: ProjectsSlideComponent;
  let fixture: ComponentFixture<ProjectsSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
