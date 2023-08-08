import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableBookingCardComponent } from './editable-booking-card.component';

describe('EditableBookingCardComponent', () => {
  let component: EditableBookingCardComponent;
  let fixture: ComponentFixture<EditableBookingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditableBookingCardComponent]
    });
    fixture = TestBed.createComponent(EditableBookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
