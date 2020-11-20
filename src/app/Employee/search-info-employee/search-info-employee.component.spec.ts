import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInfoEmployeeComponent } from './search-info-employee.component';

describe('SearchInfoEmployeeComponent', () => {
  let component: SearchInfoEmployeeComponent;
  let fixture: ComponentFixture<SearchInfoEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInfoEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInfoEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
