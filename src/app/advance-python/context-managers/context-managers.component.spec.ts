import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextManagersComponent } from './context-managers.component';

describe('ContextManagersComponent', () => {
  let component: ContextManagersComponent;
  let fixture: ComponentFixture<ContextManagersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContextManagersComponent]
    });
    fixture = TestBed.createComponent(ContextManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
