import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajametropolitanaComponent } from './cajametropolitana.component';

describe('CajametropolitanaComponent', () => {
  let component: CajametropolitanaComponent;
  let fixture: ComponentFixture<CajametropolitanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajametropolitanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajametropolitanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
