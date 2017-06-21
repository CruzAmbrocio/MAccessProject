import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolTemplateComponent } from './edit-rol-template.component';

describe('EditRolTemplateComponent', () => {
  let component: EditRolTemplateComponent;
  let fixture: ComponentFixture<EditRolTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRolTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRolTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
