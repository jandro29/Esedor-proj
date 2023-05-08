import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBlackComponent } from './footer-black.component';

describe('FooterBlackComponent', () => {
  let component: FooterBlackComponent;
  let fixture: ComponentFixture<FooterBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
