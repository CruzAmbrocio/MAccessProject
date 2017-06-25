import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocTemplateComponent } from './add-loc-template.component';

describe('AddLocTemplateComponent', () => {
  let component: AddLocTemplateComponent;
  let fixture: ComponentFixture<AddLocTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLocTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
