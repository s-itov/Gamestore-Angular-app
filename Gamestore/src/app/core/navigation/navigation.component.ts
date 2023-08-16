import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  userData: any = null;
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  ngDoCheck(): void {
    const userDataString = this.authService.getUserData();
    if (userDataString !== null) {
      this.authService.setIsLoggedIn(true);
      this.isLoggedIn = this.authService.getIsLoggedIn();
      this.userData = JSON.parse(userDataString);
      this.userName = this.userData.username;
    } else {
      this.authService.setIsLoggedIn(false);
      this.isLoggedIn = this.authService.getIsLoggedIn();
      this.userData = null;
    }
  }

  onLogoutHandler() {
    if (this.userData !== null) {
      this.authService.logout(this.userData.accessToken);
      this.router.navigate(['']);
    }
  }
}
