
import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/pages/home.component';
import { CourseComponent } from './components/pages/course.component';
import { MethodologyComponent } from './components/pages/methodology.component';
import { AboutComponent } from './components/pages/about.component';
import { ContactComponent } from './components/pages/contact.component';

const authGuard = () => {
  const authService = inject(AuthService);
  return authService.isAuthenticated() || authService.logout(); // Redirects to login if false
};

export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'course', component: CourseComponent },
      { path: 'methodology', component: MethodologyComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
