import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUItodoComponent } from './material-uitodo.component';

describe('MaterialUItodoComponent', () => {
  let component: MaterialUItodoComponent;
  let fixture: ComponentFixture<MaterialUItodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialUItodoComponent]
    });
    fixture = TestBed.createComponent(MaterialUItodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
