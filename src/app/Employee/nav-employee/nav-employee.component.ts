import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-nav-employee',
  templateUrl: './nav-employee.component.html',
  styleUrls: ['./nav-employee.component.css'],
})
export class NavEmployeeComponent implements OnInit {
  searchDisplay: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  searchForm = this.formBuilder.group({
    search: [''],
  });
  logout() {
    localStorage.removeItem('currentUser');
  }
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.searchForm.status === 'VALID') {
      this.data.sharedData.forEach((element: any) => {
        if (element.name === this.searchForm.value.search) {
          this.data.foundData.push(element);
          console.log(this.data.foundData);
          this.searchDisplay = true;
        }
      });
      this.router.navigateByUrl('search-employee');
    }
  }
}
