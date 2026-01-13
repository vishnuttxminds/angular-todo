import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoProgComponent } from './new-todo-prog.component';

describe('NewTodoProgComponent', () => {
  let component: NewTodoProgComponent;
  let fixture: ComponentFixture<NewTodoProgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTodoProgComponent]
    });
    fixture = TestBed.createComponent(NewTodoProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
