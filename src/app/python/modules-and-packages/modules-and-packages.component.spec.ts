import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesAndPackagesComponent } from './modules-and-packages.component';

describe('ModulesAndPackagesComponent', () => {
  let component: ModulesAndPackagesComponent;
  let fixture: ComponentFixture<ModulesAndPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulesAndPackagesComponent]
    });
    fixture = TestBed.createComponent(ModulesAndPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
