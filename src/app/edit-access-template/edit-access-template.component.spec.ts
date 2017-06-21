import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccessTemplateComponent } from './edit-access-template.component';

describe('EditAccessTemplateComponent', () => {
  let component: EditAccessTemplateComponent;
  let fixture: ComponentFixture<EditAccessTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccessTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccessTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
