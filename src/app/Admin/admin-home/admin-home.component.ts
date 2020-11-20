import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  allEmployees: any = [];
  delete(name: any) {
    const temp = this.data.sharedData.filter((emp: any) => {
      return !(emp.name === name);
    });
    this.allEmployees = temp;
    this.data.sharedData = temp;
  }
  update(emp: any) {
    this.data.updateData = emp;
    this.router.navigateByUrl('change-employee-admin');
  }
  ngOnInit(): void {
    this.allEmployees = this.data.sharedData;
  }
}
