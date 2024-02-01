import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaclassesComponent } from './metaclasses.component';

describe('MetaclassesComponent', () => {
  let component: MetaclassesComponent;
  let fixture: ComponentFixture<MetaclassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetaclassesComponent]
    });
    fixture = TestBed.createComponent(MetaclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
