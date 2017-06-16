import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedAccessViewComponent } from './created-access-view.component';

describe('CreatedAccessViewComponent', () => {
  let component: CreatedAccessViewComponent;
  let fixture: ComponentFixture<CreatedAccessViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedAccessViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedAccessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
