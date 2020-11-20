import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-self-info',
  templateUrl: './self-info.component.html',
  styleUrls: ['./self-info.component.css'],
})
export class SelfInfoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  foundData: any = [];
  personalInfo = JSON.parse(localStorage.getItem('currentUser') || '{}');
  searchDisplay = false;
  ngOnInit(): void {}
}
