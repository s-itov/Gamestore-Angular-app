import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isSubmitted = false;

  errorServer: boolean = false;
  errorMsg: string = '';


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.isSubmitted = true;
    this.authService
      .login({
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || '',
      })
      .subscribe({
        next: (response) => {
          this.authService.setUserData(response);
          this.loginForm.reset();
          this.router.navigate(['']);
        },
        error: (msg) => {
          this.errorServer = true;
          console.log(msg);
          if (msg.status === 403) {
            this.errorMsg = 'Email or password is wrong.';
          }
        },
      });
  }
}
