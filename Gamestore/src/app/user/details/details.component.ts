import { Component, OnInit } from '@angular/core';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from '../user-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';
import { IRegisterData } from 'src/app/interfaces/authInterfaces';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  game!: IGameReturnData;
  userData!: IRegisterData;

  isLoggedIn: boolean = false;
  isOwner: boolean = false;

  errorServer: boolean = false;
  errorMsg: string = '';

  constructor(
    private userCRUD: UserCrudService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.globalLoaderService.showLoader();

    this.route.paramMap.subscribe((params) => {
      const idGame = params.get('id');
      this.userCRUD.getGameById(idGame).subscribe({
        next: (response) => {
          this.game = response;
          this.globalLoaderService.hideLoader();
          let userDataJSON = this.authService.getUserData();
          if (userDataJSON !== null) {
            let userId = JSON.parse(userDataJSON)._id;
            let ownerId = this.game._ownerId;
            userId === ownerId ? (this.isOwner = true) : (this.isOwner = false);
          }
        },
        error: (msg) => {
          this.globalLoaderService.hideLoader();
          console.log(msg);
        },
      });
    });
    
    this.isLoggedIn = this.authService.getIsLoggedIn();

  }
}
