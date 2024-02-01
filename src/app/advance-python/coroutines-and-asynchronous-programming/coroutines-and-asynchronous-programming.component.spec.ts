import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoroutinesAndAsynchronousProgrammingComponent } from './coroutines-and-asynchronous-programming.component';

describe('CoroutinesAndAsynchronousProgrammingComponent', () => {
  let component: CoroutinesAndAsynchronousProgrammingComponent;
  let fixture: ComponentFixture<CoroutinesAndAsynchronousProgrammingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoroutinesAndAsynchronousProgrammingComponent]
    });
    fixture = TestBed.createComponent(CoroutinesAndAsynchronousProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
