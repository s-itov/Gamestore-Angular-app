import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGameData, IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from '../user-crud.service';
import { AuthService } from 'src/app/auth/auth.service';
import { imageUrlValidator } from 'src/app/validators/httpsValidator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  errorServer: boolean = false;
  errorMsg: string = '';

  isSubmitted = false;

  idGame!: string;

  game: IGameReturnData = {
    imageUrl: '',
    title: '',
    category: '',
    price: '',
    description: '',
    ownerInfo: { imageUrl: '', username: '', email: '' },
    _ownerId: '',
    _id: '',
    _createdOn: 0,
  };

  editForm = this.fb.group({
    imageUrl: ['', [Validators.required, imageUrlValidator()]],
    title: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', [Validators.required, Validators.minLength(1)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userCrud: UserCrudService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.idGame = id!;
      this.userCrud.getGameById(this.idGame).subscribe({
        next: (response) => {
          this.game = response;
          this.editForm.patchValue({
            imageUrl: this.game.imageUrl || '',
            title: this.game.title || '',
            category: this.game.category || '',
            price: this.game.price || '',
            description: this.game.description || '',
          });
        },
        error: (msg) => {
          this.errorServer = true;
          if (msg.status === 403) {
            this.authService.clearUserData();
            this.router.navigate(['/login']);
          }
          if (msg.status === 404) {
            this.router.navigate(['/catalog']);
          }

          if (msg.status === 0) {
            this.errorMsg =
              'Тhe server is down. We are working on fixing the problem.';
          }
        },
      });
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    const gameData: IGameData = {
        imageUrl: this.editForm.value.imageUrl || '',
        title: this.editForm.value.title || '',
        category: this.editForm.value.category || '',
        price: this.editForm.value.price || '',
        description: this.editForm.value.description || '',
        ownerInfo: { imageUrl: '', username: '', email: '' }
    };
    const userData = this.authService.getUserData();
    if (userData) {
      gameData.ownerInfo = JSON.parse(userData);
    }
    const accessToken = this.authService.getUserAccessToken();
    this.userCrud.updateGame(this.idGame, gameData, accessToken).subscribe({
      next: (response) => {
        this.router.navigate([`${response._id}/details`]);
      },
      error: (msg) => {
        this.errorServer = true;
        if (msg.status === 403) {
          this.authService.clearUserData();
          this.router.navigate(['/login']);
        }
        if (msg.status === 0) {
          this.errorMsg =
            'Тhe server is down. We are working on fixing the problem.';
        }
      },
    });
  }
}
