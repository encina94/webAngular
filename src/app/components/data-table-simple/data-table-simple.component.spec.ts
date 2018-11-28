import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableSimpleComponent } from './data-table-simple.component';

describe('DataTableSimpleComponent', () => {
  let component: DataTableSimpleComponent;
  let fixture: ComponentFixture<DataTableSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
