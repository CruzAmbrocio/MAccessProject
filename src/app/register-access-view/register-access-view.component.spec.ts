import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccessViewComponent } from './register-access-view.component';

describe('RegisterAccessViewComponent', () => {
  let component: RegisterAccessViewComponent;
  let fixture: ComponentFixture<RegisterAccessViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAccessViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAccessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
