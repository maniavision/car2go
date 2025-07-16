// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CarListComponent } from './features/car-list/car-list.component';
import { RequestCarComponent } from './features/request-car/request-car.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { LoginComponent } from './features/login/login.component';
import { ConfirmAccountComponent } from './features/confirm-account/confirm-account.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  { path: '',               component: HomeComponent },
  { path: 'cars',           component: CarListComponent },
  { path: 'request-car',    component: RequestCarComponent },
  { path: 'reviews',        component: ReviewsComponent },
  { path: 'login',          component: LoginComponent },
  { path: 'confirm/:token', component: ConfirmAccountComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
