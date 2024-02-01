import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionHandlingComponent } from './exception-handling.component';

describe('ExceptionHandlingComponent', () => {
  let component: ExceptionHandlingComponent;
  let fixture: ComponentFixture<ExceptionHandlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionHandlingComponent]
    });
    fixture = TestBed.createComponent(ExceptionHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
