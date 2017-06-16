import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessViewComponent } from './access-view.component';

describe('AccessViewComponent', () => {
  let component: AccessViewComponent;
  let fixture: ComponentFixture<AccessViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
