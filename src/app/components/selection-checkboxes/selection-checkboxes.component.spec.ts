import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCheckboxesComponent } from './selection-checkboxes.component';

describe('SelectionCheckboxesComponent', () => {
  let component: SelectionCheckboxesComponent;
  let fixture: ComponentFixture<SelectionCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
