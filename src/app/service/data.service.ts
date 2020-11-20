import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  sharedData: any = [];
  updateData: any;
  foundData: any = [];
  skills: String[] = ['Python', 'Java', 'ReactJS', 'Angular'];
  public static baseUrl = 'http://192.168.29.140:3000/';
  constructor(private http: HttpClient) {}
  getEmployeeData() {
    return this.http.get(DataService.baseUrl, httpOptions);
  }
  // checkLogin(data: any) {
  //   return this.http.post(DataService.baseUrl + 'login', data, httpOptions);
  // }
}
