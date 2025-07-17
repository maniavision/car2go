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
  // Add a 'data' property with an 'animation' key to each route
  { path: '',               component: HomeComponent,           data: { animation: 'HomePage' } },
  { path: 'cars',           component: CarListComponent,        data: { animation: 'CarsPage' } },
  { path: 'request-car',    component: RequestCarComponent,     data: { animation: 'RequestPage' } },
  { path: 'reviews',        component: ReviewsComponent,        data: { animation: 'ReviewsPage' } },
  { path: 'login',          component: LoginComponent,          data: { animation: 'LoginPage' } },
  { path: 'confirm/:token', component: ConfirmAccountComponent, data: { animation: 'ConfirmPage' } },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { animation: 'AdminPage' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
