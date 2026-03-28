import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { authGuard } from './core/gaurds/auth.guard';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'employees', component: EmployeeListComponent , canActivate: [authGuard]},
    // {path: 'redirect'}
    { path: '', redirectTo: 'login', pathMatch: 'full' },  
    { path: '**', redirectTo: 'login' }
];
