import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrencyAndThreadingComponent } from './concurrency-and-threading.component';

describe('ConcurrencyAndThreadingComponent', () => {
  let component: ConcurrencyAndThreadingComponent;
  let fixture: ComponentFixture<ConcurrencyAndThreadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcurrencyAndThreadingComponent]
    });
    fixture = TestBed.createComponent(ConcurrencyAndThreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
