import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-search-info-employee',
  templateUrl: './search-info-employee.component.html',
  styleUrls: ['./search-info-employee.component.css'],
})
export class SearchInfoEmployeeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router
  ) {}
  searchedData: any = this.data.foundData;
  ngOnInit(): void {}
}
