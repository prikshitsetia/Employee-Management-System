import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-update-employee-admin',
  templateUrl: './update-employee-admin.component.html',
  styleUrls: ['./update-employee-admin.component.css'],
})
export class UpdateEmployeeAdminComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  updateForm = this.formBuilder.group({
    name: [''],
    email: [''],
    designation: [''],
    password: [''],
    salary: [''],
    doj: [''],
    role: [''],
    skills: [''],
  });
  dataToBeUpdated: any;
  skills: String[] = [];
  ngOnInit(): void {
    this.dataToBeUpdated = this.data.updateData;
    this.updateForm = this.formBuilder.group({
      name: [this.dataToBeUpdated.name, [Validators.required]],
      email: [this.dataToBeUpdated.email, [Validators.required]],
      designation: [this.dataToBeUpdated.designation, [Validators.required]],
      password: [this.dataToBeUpdated.password, [Validators.required]],
      salary: [this.dataToBeUpdated.salary, [Validators.required]],
      doj: [this.dataToBeUpdated.doj, [Validators.required]],
      role: [this.dataToBeUpdated.role, [Validators.required]],
      skills: [this.dataToBeUpdated.skills, Validators.required],
    });
    this.skills = this.data.skills;
  }
  onSubmit() {
    if (this.updateForm.status === 'VALID') {
      const a = this.updateForm.value;
      for (let i = 0; i < this.data.sharedData.length; i++) {
        console.log(this.data.sharedData._id);

        if (this.data.sharedData[i]._id === this.dataToBeUpdated._id) {
          this.data.sharedData[i].name = this.updateForm.value.name;
          this.data.sharedData[
            i
          ].designation = this.updateForm.value.designation;
          this.data.sharedData[i].password = this.updateForm.value.password;
          this.data.sharedData[i].salary = this.updateForm.value.salary;
          this.data.sharedData[i].doj = this.updateForm.value.doj;
          this.data.sharedData[i].role = this.updateForm.value.role;
          this.data.sharedData[i].skills = this.updateForm.value.skills;
        }
      }

      console.log(this.data.sharedData);
      this.router.navigateByUrl('admin-home');
    }
  }
}
