import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTemplateComponent } from './add-user-template.component';

describe('AddUserTemplateComponent', () => {
  let component: AddUserTemplateComponent;
  let fixture: ComponentFixture<AddUserTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
