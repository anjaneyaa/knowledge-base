import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTypingAndTypeAnnotationsComponent } from './dynamic-typing-and-type-annotations.component';

describe('DynamicTypingAndTypeAnnotationsComponent', () => {
  let component: DynamicTypingAndTypeAnnotationsComponent;
  let fixture: ComponentFixture<DynamicTypingAndTypeAnnotationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTypingAndTypeAnnotationsComponent]
    });
    fixture = TestBed.createComponent(DynamicTypingAndTypeAnnotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
