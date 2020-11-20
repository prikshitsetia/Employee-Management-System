import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  updateForm = this.formBuilder.group({
    skills: [''],
    password: [''],
  });
  skills: String[] = [];
  personalInfo = JSON.parse(localStorage.getItem('currentUser') || '{}');
  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      skills: [this.personalInfo.skills, Validators.required],
      password: [this.personalInfo.password, Validators.required],
    });
    this.skills = this.data.skills;
  }

  onSubmit() {
    if (this.updateForm.status === 'VALID') {
      const temp: any = this.data.sharedData.map((element: any) => {
        if (element.name === this.personalInfo.name) {
          element.skills = this.updateForm.value.skills;
          element.password = this.updateForm.value.password;
          console.log(element);

          localStorage.setItem('currentUser', JSON.stringify(element));
        }
        return element;
      });
      this.data.sharedData = temp;
      console.log(temp);

      this.router.navigateByUrl('self-info');
    }
  }
}
