import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseInteractionComponent } from './database-interaction.component';

describe('DatabaseInteractionComponent', () => {
  let component: DatabaseInteractionComponent;
  let fixture: ComponentFixture<DatabaseInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseInteractionComponent]
    });
    fixture = TestBed.createComponent(DatabaseInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
