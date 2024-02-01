import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiProgrammingComponent } from './gui-programming.component';

describe('GuiProgrammingComponent', () => {
  let component: GuiProgrammingComponent;
  let fixture: ComponentFixture<GuiProgrammingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuiProgrammingComponent]
    });
    fixture = TestBed.createComponent(GuiProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
