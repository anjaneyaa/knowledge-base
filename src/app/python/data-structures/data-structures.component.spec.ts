import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructuresComponent } from './data-structures.component';

describe('DataStructuresComponent', () => {
  let component: DataStructuresComponent;
  let fixture: ComponentFixture<DataStructuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataStructuresComponent]
    });
    fixture = TestBed.createComponent(DataStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
