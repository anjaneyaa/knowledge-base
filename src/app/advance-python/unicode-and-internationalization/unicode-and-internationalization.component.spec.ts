import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicodeAndInternationalizationComponent } from './unicode-and-internationalization.component';

describe('UnicodeAndInternationalizationComponent', () => {
  let component: UnicodeAndInternationalizationComponent;
  let fixture: ComponentFixture<UnicodeAndInternationalizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnicodeAndInternationalizationComponent]
    });
    fixture = TestBed.createComponent(UnicodeAndInternationalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
