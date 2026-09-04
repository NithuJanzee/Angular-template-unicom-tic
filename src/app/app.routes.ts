import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Students } from './students/students';
import { Courses } from './courses/courses';
import { EnrollmentPage } from './enrollment-page/enrollment-page';
import { Reports } from './reports/reports';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: Dashboard },
  { path: 'students', component: Students },
  { path: 'courses', component: Courses },
  { path: 'enrollment', component: EnrollmentPage },
  { path: 'reports', component: Reports },
  { path: '**', redirectTo: 'dashboard' },
];
