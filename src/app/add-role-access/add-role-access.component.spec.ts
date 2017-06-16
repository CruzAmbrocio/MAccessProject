import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleAccessComponent } from './add-role-access.component';

describe('AddRoleAccessComponent', () => {
  let component: AddRoleAccessComponent;
  let fixture: ComponentFixture<AddRoleAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoleAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
