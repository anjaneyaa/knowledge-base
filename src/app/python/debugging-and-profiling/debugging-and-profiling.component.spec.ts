import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggingAndProfilingComponent } from './debugging-and-profiling.component';

describe('DebuggingAndProfilingComponent', () => {
  let component: DebuggingAndProfilingComponent;
  let fixture: ComponentFixture<DebuggingAndProfilingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebuggingAndProfilingComponent]
    });
    fixture = TestBed.createComponent(DebuggingAndProfilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
