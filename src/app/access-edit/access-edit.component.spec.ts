import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessEditComponent } from './access-edit.component';

describe('AccessEditComponent', () => {
  let component: AccessEditComponent;
  let fixture: ComponentFixture<AccessEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
