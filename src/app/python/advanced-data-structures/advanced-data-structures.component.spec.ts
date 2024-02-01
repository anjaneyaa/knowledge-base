import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDataStructuresComponent } from './advanced-data-structures.component';

describe('AdvancedDataStructuresComponent', () => {
  let component: AdvancedDataStructuresComponent;
  let fixture: ComponentFixture<AdvancedDataStructuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedDataStructuresComponent]
    });
    fixture = TestBed.createComponent(AdvancedDataStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
