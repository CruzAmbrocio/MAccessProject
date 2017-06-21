import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessTemplateComponent } from './add-access-template.component';

describe('AddAccessTemplateComponent', () => {
  let component: AddAccessTemplateComponent;
  let fixture: ComponentFixture<AddAccessTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccessTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccessTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
