import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualEnvironmentsComponent } from './virtual-environments.component';

describe('VirtualEnvironmentsComponent', () => {
  let component: VirtualEnvironmentsComponent;
  let fixture: ComponentFixture<VirtualEnvironmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualEnvironmentsComponent]
    });
    fixture = TestBed.createComponent(VirtualEnvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
