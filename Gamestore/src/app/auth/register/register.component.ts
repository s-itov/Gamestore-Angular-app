import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { avatarUrlValidator } from 'src/app/validators/httpsValidator';

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
      avatarUrl: ['', [Validators.required, avatarUrlValidator()]],
      email: ['', [Validators.required,  Validators.email]],
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
    // private authService: AuthService,
    // private router: Router
  ) {}
}


