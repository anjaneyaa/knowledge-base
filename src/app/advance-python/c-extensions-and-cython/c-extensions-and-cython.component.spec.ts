import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CExtensionsAndCythonComponent } from './c-extensions-and-cython.component';

describe('CExtensionsAndCythonComponent', () => {
  let component: CExtensionsAndCythonComponent;
  let fixture: ComponentFixture<CExtensionsAndCythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CExtensionsAndCythonComponent]
    });
    fixture = TestBed.createComponent(CExtensionsAndCythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
