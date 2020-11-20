import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeAdminComponent } from './update-employee-admin.component';

describe('UpdateEmployeeAdminComponent', () => {
  let component: UpdateEmployeeAdminComponent;
  let fixture: ComponentFixture<UpdateEmployeeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
