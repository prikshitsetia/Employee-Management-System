import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  canLogin: boolean = true;
  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.data.sharedData.forEach((element: any) => {
        if (element.email === this.loginForm.value.email) {
          if (element.password === this.loginForm.value.password) {
            console.log('valid');

            localStorage.setItem('currentUser', JSON.stringify(element));
            if (element.role === 'employee') {
              this.router.navigateByUrl('self-info');
            } else {
              this.router.navigateByUrl('admin-home');
            }
          } else {
            this.canLogin = false;
          }
        } else {
          this.canLogin = false;
        }
      });
    }
  }
}
