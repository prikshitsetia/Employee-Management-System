import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelfInfoComponent } from './Employee/self-info/self-info.component';
import { SearchInfoEmployeeComponent } from './Employee/search-info-employee/search-info-employee.component';
import { NavEmployeeComponent } from './Employee/nav-employee/nav-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { NavAdminComponent } from './Admin/nav-admin/nav-admin.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AddEmployeeComponent } from './Admin/add-employee/add-employee.component';
import { AdminSearchComponent } from './Admin/admin-search/admin-search.component';
import { UpdateEmployeeAdminComponent } from './Admin/update-employee-admin/update-employee-admin.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReloadComponent } from './reload/reload.component';
import { AddSkillsComponent } from './Admin/add-skills/add-skills.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelfInfoComponent,
    SearchInfoEmployeeComponent,
    NavEmployeeComponent,
    UpdateEmployeeComponent,
    NavAdminComponent,
    AdminHomeComponent,
    AddEmployeeComponent,
    AdminSearchComponent,
    UpdateEmployeeAdminComponent,
    ReloadComponent,
    AddSkillsComponent,
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
