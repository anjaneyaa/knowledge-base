import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInFunctionsAndLibrariesComponent } from './built-in-functions-and-libraries.component';

describe('BuiltInFunctionsAndLibrariesComponent', () => {
  let component: BuiltInFunctionsAndLibrariesComponent;
  let fixture: ComponentFixture<BuiltInFunctionsAndLibrariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltInFunctionsAndLibrariesComponent]
    });
    fixture = TestBed.createComponent(BuiltInFunctionsAndLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
