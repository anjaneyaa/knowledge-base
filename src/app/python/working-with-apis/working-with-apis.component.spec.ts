import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithApisComponent } from './working-with-apis.component';

describe('WorkingWithApisComponent', () => {
  let component: WorkingWithApisComponent;
  let fixture: ComponentFixture<WorkingWithApisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingWithApisComponent]
    });
    fixture = TestBed.createComponent(WorkingWithApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
