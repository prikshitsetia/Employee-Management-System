import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css'],
})
export class AdminSearchComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  result: any = [];
  delete(name: any) {
    const temp = this.data.sharedData.filter((emp: any) => {
      return !(emp.name === name);
    });
    this.data.sharedData = temp;
    const temp2 = this.data.foundData.filter((emp: any) => {
      return !(emp.name === name);
    });
    this.result = temp2;
    this.data.foundData = temp2;
  }
  update(emp: any) {
    this.data.updateData = emp;
    console.log(this.data.updateData);

    this.router.navigateByUrl('change-employee-admin');
  }
  ngOnInit(): void {
    this.result = this.data.foundData;
  }
}
