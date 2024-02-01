import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratorsAndIterablesComponent } from './iterators-and-iterables.component';

describe('IteratorsAndIterablesComponent', () => {
  let component: IteratorsAndIterablesComponent;
  let fixture: ComponentFixture<IteratorsAndIterablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IteratorsAndIterablesComponent]
    });
    fixture = TestBed.createComponent(IteratorsAndIterablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
