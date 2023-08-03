import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth/auth.service';
import { UserCrudService } from './user/user-crud.service';

@Injectable({
  providedIn: 'root',
})
export class ownerGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private userCRUD: UserCrudService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const gameId = route.params['id'];
    const user = this.authService.getUserData();
    if (user !== null) {
      const userId = JSON.parse(user)._id;
      console.log(userId);
      
      this.userCRUD.getGameById(gameId).subscribe({
        next: (response) => {
          if (response && response._ownerId === userId) {
            return true;
          } else {
            this.router.navigate([`${response._id}/details`]);
            return false;
          }
        },
        error: (msg) => {
          console.log(msg);
        },
      });
    }
  }
}