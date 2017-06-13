import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationNewRegisterComponent } from './location-new-register.component';

describe('LocationNewRegisterComponent', () => {
  let component: LocationNewRegisterComponent;
  let fixture: ComponentFixture<LocationNewRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationNewRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationNewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
