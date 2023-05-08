import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotsFormComponent } from './chatbots-form.component';

describe('ChatbotsFormComponent', () => {
  let component: ChatbotsFormComponent;
  let fixture: ComponentFixture<ChatbotsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
