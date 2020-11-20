import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmployeeComponent } from './nav-employee.component';

describe('NavEmployeeComponent', () => {
  let component: NavEmployeeComponent;
  let fixture: ComponentFixture<NavEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
