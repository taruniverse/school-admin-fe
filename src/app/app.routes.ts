import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { StudentComponent } from './main/student/student.component';
import { AddStudentComponent } from './main/add-student/add-student.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./main/main.component').then((mod) => mod.MainComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'student',
        component: StudentComponent,
      },
      {
        path:'add-student',
        component:AddStudentComponent
      }
    ],
  },
];
