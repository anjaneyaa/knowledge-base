import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineKnowledgeBaseAndAiComponent } from './machine-knowledge-base-and-ai.component';

describe('MachineKnowledgeBaseAndAiComponent', () => {
  let component: MachineKnowledgeBaseAndAiComponent;
  let fixture: ComponentFixture<MachineKnowledgeBaseAndAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineKnowledgeBaseAndAiComponent]
    });
    fixture = TestBed.createComponent(MachineKnowledgeBaseAndAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
