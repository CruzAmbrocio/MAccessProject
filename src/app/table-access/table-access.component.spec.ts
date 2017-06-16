import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAccessComponent } from './table-access.component';

describe('TableAccessComponent', () => {
  let component: TableAccessComponent;
  let fixture: ComponentFixture<TableAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
