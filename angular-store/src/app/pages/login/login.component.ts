import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    this.authService.login(form.value).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
