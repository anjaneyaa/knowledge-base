import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStructuresComponent } from './control-structures.component';

describe('ControlStructuresComponent', () => {
  let component: ControlStructuresComponent;
  let fixture: ComponentFixture<ControlStructuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlStructuresComponent]
    });
    fixture = TestBed.createComponent(ControlStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
