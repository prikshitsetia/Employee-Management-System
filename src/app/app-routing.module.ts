import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchInfoEmployeeComponent } from './Employee/search-info-employee/search-info-employee.component';
import { SelfInfoComponent } from './Employee/self-info/self-info.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AddEmployeeComponent } from './Admin/add-employee/add-employee.component';
import { AdminSearchComponent } from './Admin/admin-search/admin-search.component';
import { UpdateEmployeeAdminComponent } from './Admin/update-employee-admin/update-employee-admin.component';
import { ReloadComponent } from './reload/reload.component';
import { AddSkillsComponent } from './Admin/add-skills/add-skills.component';
const routes: Routes = [
  { path: 'self-info', component: SelfInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search-employee', component: SearchInfoEmployeeComponent },
  { path: 'update-employee', component: UpdateEmployeeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'admin-search', component: AdminSearchComponent },
  {
    path: 'change-employee-admin',
    pathMatch: 'full',
    component: UpdateEmployeeAdminComponent,
  },
  { path: 'reload', component: ReloadComponent },
  { path: 'add-skills', component: AddSkillsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
