import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOnListComponent } from './insert-on-list.component';

describe('InsertOnListComponent', () => {
  let component: InsertOnListComponent;
  let fixture: ComponentFixture<InsertOnListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertOnListComponent]
    });
    fixture = TestBed.createComponent(InsertOnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
