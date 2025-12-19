import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { PageNotFond } from './page-not-found/page-not-found';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'admin-dashboard', component: AdminDashboard, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFond }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
