import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { avatarUrlValidator } from 'src/app/validators/httpsValidator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isSubmitted = false;

  errorServer: boolean = false;
  errorMsg: string = '';

  registerForm = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required,  Validators.email]],
      avatarUrl: ['', [Validators.required, avatarUrlValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validator: this.passwordMatchValidator }
  );

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const rePassword = control.get('rePassword');

    if (password?.value !== rePassword?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.isSubmitted = true;
    this.authService
      .register({
        username: this.registerForm.value.username || '',
        email: this.registerForm.value.email || '',
        avatarUrl: this.registerForm.value.avatarUrl || '',
        password: this.registerForm.value.password || '',
      })
      .subscribe({
        next: (response) => {
          this.authService.setUserData(response);
          this.registerForm.reset();
          this.router.navigate(['']);
        },
        error: (msg) => {
          this.errorServer = true;
          console.log(msg);
          if (msg.status === 409) {
            this.errorMsg = 'User with the same email already exists';
          }
        },
      });
  }
}


