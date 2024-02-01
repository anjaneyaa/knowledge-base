import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryManagementComponent } from './memory-management.component';

describe('MemoryManagementComponent', () => {
  let component: MemoryManagementComponent;
  let fixture: ComponentFixture<MemoryManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemoryManagementComponent]
    });
    fixture = TestBed.createComponent(MemoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
