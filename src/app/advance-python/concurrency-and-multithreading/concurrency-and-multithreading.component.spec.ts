import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrencyAndMultithreadingComponent } from './concurrency-and-multithreading.component';

describe('ConcurrencyAndMultithreadingComponent', () => {
  let component: ConcurrencyAndMultithreadingComponent;
  let fixture: ComponentFixture<ConcurrencyAndMultithreadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcurrencyAndMultithreadingComponent]
    });
    fixture = TestBed.createComponent(ConcurrencyAndMultithreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
