import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePythonComponent } from './advance-python.component';

describe('AdvancePythonComponent', () => {
  let component: AdvancePythonComponent;
  let fixture: ComponentFixture<AdvancePythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancePythonComponent]
    });
    fixture = TestBed.createComponent(AdvancePythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
