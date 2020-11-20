import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Employee Management System';
  employee: any = [];
  constructor(private router: Router, private data: DataService) {}
  ngOnInit(): void {
    this.data.getEmployeeData().subscribe((res: any) => {
      res.forEach((element: any) => {
        element.doj = new Date(element.doj);
        element.doj =
          element.doj.getFullYear() +
          '/' +
          (element.doj.getMonth() + 1) +
          '/' +
          element.doj.getDate();
        this.employee.push(element);
      });
      if (!localStorage.getItem('currentUser')) {
        console.log(1);

        this.router.navigateByUrl('login');
      } else {
        console.log(2);
        const temp = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (temp.role === 'employee') {
          console.log(3);
          this.router.navigateByUrl('self-info');
        } else {
          console.log(4);
          this.router.navigateByUrl('admin-home');
        }
      }
      this.data.sharedData = this.employee;
    });
  }
}
