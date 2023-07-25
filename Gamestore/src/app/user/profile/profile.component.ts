import { Component, OnInit } from '@angular/core';
import { IRegisterData } from 'src/app/interfaces/authInterfaces';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from '../user-crud.service';
import { AuthService } from 'src/app/auth/auth.service';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData!: IRegisterData;
  userGames!: IGameReturnData[];

  constructor(
    private userCRUD: UserCrudService,
    private authService: AuthService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.globalLoaderService.showLoader();
    let userDataJSON = this.authService.getUserData();
    if (userDataJSON !== null) {
      this.userData = JSON.parse(userDataJSON);
      let userID = JSON.parse(userDataJSON)._id;

      this.userCRUD.getAllGames().subscribe({
        next: (response) => {
          this.globalLoaderService.hideLoader();
          this.userGames = response.filter((game) => game._ownerId === userID);
        },
        error: (msg) => {
          console.log(msg);
          this.globalLoaderService.hideLoader();
          if (msg.status === 404) {
            this.userGames = [];
          }
        },
      });
    } else {
      console.log('userData is not found in localStorage.');
    }
  }
}
