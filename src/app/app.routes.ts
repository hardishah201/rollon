import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { PageNotFond } from './page-not-fond/page-not-fond';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { ComingSoon } from './coming-soon/coming-soon';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboard, canActivate: [AuthGuard] },
  { path: '', component: ComingSoon },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFond }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
