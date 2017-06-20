import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserTemplateComponent } from './edit-user-template.component';

describe('EditUserTemplateComponent', () => {
  let component: EditUserTemplateComponent;
  let fixture: ComponentFixture<EditUserTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
