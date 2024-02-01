import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorsComponent } from './generators.component';

describe('GeneratorsComponent', () => {
  let component: GeneratorsComponent;
  let fixture: ComponentFixture<GeneratorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorsComponent]
    });
    fixture = TestBed.createComponent(GeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
