import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmessageComponent } from './setmessage.component';

describe('SetmessageComponent', () => {
  let component: SetmessageComponent;
  let fixture: ComponentFixture<SetmessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetmessageComponent]
    });
    fixture = TestBed.createComponent(SetmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
