import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}

  addForm = this.formBuilder.group({
    name: [''],
    email: [''],
    designation: [''],
    password: [''],
    salary: [''],
    doj: [''],
    role: [''],
    skills: [''],
  });
  skills: String[] = [];
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      password: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      doj: ['', [Validators.required]],
      role: ['', [Validators.required]],
      skills: ['', Validators.required],
    });
    this.skills = this.data.skills;
  }

  onSubmit() {
    if (this.addForm.status === 'VALID') {
      const a = this.addForm.value;

      this.data.sharedData.push(a);
      console.log(this.data.sharedData);
      this.router.navigateByUrl('admin-home');
    }
  }
}
