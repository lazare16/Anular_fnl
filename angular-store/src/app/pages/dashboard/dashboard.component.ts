import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fixed the plural issue
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    const credentials = form.value; // Retrieve form values
    this.authService.login(credentials).subscribe(() => {
      this.router.navigate(['/dashboard']); // Redirect after login
    });
  }
}
