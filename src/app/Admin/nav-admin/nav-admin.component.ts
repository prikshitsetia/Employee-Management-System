import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css'],
})
export class NavAdminComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  searchForm = this.formBuilder.group({
    searchBy: [''],
    search: [''],
    endSalary: [''],
  });
  salary: boolean = false;
  logout() {
    localStorage.removeItem('currentUser');
  }
  selectCategory(event: any) {
    this.searchForm.value.searchBy = event.target.value;
    if (this.searchForm.value.searchBy === 'salary') {
      this.salary = true;
    } else {
      this.salary = false;
    }
  }
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchBy: [''],
      search: ['', [Validators.required]],
      endSalary: [''],
    });
  }
  onSubmit() {
    this.data.foundData = [];
    console.log(this.data.foundData);

    if (this.searchForm.status === 'VALID') {
      this.data.sharedData.forEach((element: any) => {
        const a = this.searchForm.value.searchBy;
        if (a === 'name') {
          if (element[a] === this.searchForm.value.search) {
            this.data.foundData.push(element);
          }
        } else if (a === 'salary') {
          if (
            element[a] >= Number(this.searchForm.value.search) &&
            element[a] < Number(this.searchForm.value.endSalary)
          ) {
            console.log(element[a]);

            this.data.foundData.push(element);
          }
        } else if (a === 'skills') {
          const temp = this.searchForm.value.search.split(',');
          let flag = 0;
          let flag2 = 0;
          for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < element[a].length; j++) {
              if (temp[i] === element[a][j]) {
                for (let k = 0; k < this.data.foundData.length; k++) {
                  if (this.data.foundData[k] === element) {
                    flag2 = 1;
                    break;
                  }
                }
                if (flag2 !== 1) {
                  this.data.foundData.push(element);
                }
                flag = 1;
                break;
              }
            }
            if (flag === 1) {
              break;
            }
          }
        } else if (a === 'doj') {
          if (element[a] === this.searchForm.value.search) {
            this.data.foundData.push(element);
            console.log(this.data.foundData);
          }
        }
      });

      this.router.navigateByUrl('reload');
    }
  }
}
