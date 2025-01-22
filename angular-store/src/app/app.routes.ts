import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent },
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: {role: 'admin'}},
    { path: '**', redirectTo: '' }
];
