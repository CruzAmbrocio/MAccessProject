import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedLocationComponent } from './created-location.component';

describe('CreatedLocationComponent', () => {
  let component: CreatedLocationComponent;
  let fixture: ComponentFixture<CreatedLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
