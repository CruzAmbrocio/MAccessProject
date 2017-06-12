import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolCheckComponent } from './edit-rol-check.component';

describe('EditRolCheckComponent', () => {
  let component: EditRolCheckComponent;
  let fixture: ComponentFixture<EditRolCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRolCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRolCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
