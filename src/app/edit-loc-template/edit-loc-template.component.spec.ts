import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocTemplateComponent } from './edit-loc-template.component';

describe('EditLocTemplateComponent', () => {
  let component: EditLocTemplateComponent;
  let fixture: ComponentFixture<EditLocTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLocTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
