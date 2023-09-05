import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerChatComponent } from './freelancer-chat.component';

describe('FreelancerChatComponent', () => {
  let component: FreelancerChatComponent;
  let fixture: ComponentFixture<FreelancerChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerChatComponent]
    });
    fixture = TestBed.createComponent(FreelancerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
