import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserCrudService } from '../user-crud.service';
import { imageUrlValidator } from 'src/app/validators/httpsValidator';
import { IGameData } from 'src/app/interfaces/gameInterfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  isSubmitted = false;

  createForm = this.fb.group({
    imageUrl: ['', [Validators.required, imageUrlValidator()]],
    title: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', [Validators.required, Validators.minLength(1)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
  });

  constructor(
    private fb: FormBuilder,
    private userCRUD: UserCrudService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.isSubmitted = true;

    let gameData: IGameData = {
      imageUrl: this.createForm.value.imageUrl || '',
      title: this.createForm.value.title || '',
      category: this.createForm.value.title || '',
      price: this.createForm.value.price || '',
      description: this.createForm.value.description || '',
      ownerInfo: { imageUrl: '', username: '', email: '' },
    };
    const userData = this.authService.getUserData();
    if (userData) {
      gameData.ownerInfo = JSON.parse(userData);
    }
    const accessToken = this.authService.getUserAccessToken();
    this.userCRUD.createGame(gameData, accessToken).subscribe({
      next: (response) => {
        this.router.navigate([`${response._id}/details`]);
      },
      error: (msg) => {
        console.log(msg);
        this.authService.clearUserData();
        this.router.navigate(['/login']);
      },
    });
  }
}
