import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceOptimizationComponent } from './performance-optimization.component';

describe('PerformanceOptimizationComponent', () => {
  let component: PerformanceOptimizationComponent;
  let fixture: ComponentFixture<PerformanceOptimizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceOptimizationComponent]
    });
    fixture = TestBed.createComponent(PerformanceOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
