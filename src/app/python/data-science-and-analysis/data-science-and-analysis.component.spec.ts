import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceAndAnalysisComponent } from './data-science-and-analysis.component';

describe('DataScienceAndAnalysisComponent', () => {
  let component: DataScienceAndAnalysisComponent;
  let fixture: ComponentFixture<DataScienceAndAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataScienceAndAnalysisComponent]
    });
    fixture = TestBed.createComponent(DataScienceAndAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
