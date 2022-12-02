import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmodigyComponent } from './bookmodigy.component';

describe('BookmodigyComponent', () => {
  let component: BookmodigyComponent;
  let fixture: ComponentFixture<BookmodigyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmodigyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmodigyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
