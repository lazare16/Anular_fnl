import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/']);
      return false;
    }

    try {
      const user = JSON.parse(atob(token.split('.')[1]));
      const requiredRole = route.data['role'];
      if (user.role === requiredRole) return true;

      this.router.navigate(['/']);
      return false;
    } catch (error) {
      console.error('Invalid token format', error);
      this.router.navigate(['/']);
      return false;
    }
  }
}
