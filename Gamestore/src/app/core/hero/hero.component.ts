import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from 'src/app/user/user-crud.service';
import { GlobalLoaderService } from '../global-loader/global-loader.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  username: string | null = '';

  allGames: IGameReturnData[] = [];

  searchTerm: string = '';
  filteredGames: IGameReturnData[] = [];

  constructor(
    private userCRUD: UserCrudService,
    private authService: AuthService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.globalLoaderService.showLoader();
    this.userCRUD.getAllGames().subscribe({
      next: (response) => {
        this.allGames = response;
        this.filterLastFourGames();
        this.globalLoaderService.hideLoader();
      },
      error: (err) => {
        this.globalLoaderService.hideLoader();

        alert(err);
      },
    });
  }

  ngDoCheck(): void {
    this.username = this.authService.getUsername();
  }

  onSearch() {
    if (this.searchTerm.trim() === '') {
      this.filteredGames = this.allGames
    } else {
      // Filter the games based on the search term
      this.filteredGames = this.allGames.filter((game: IGameReturnData) =>
        game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    // Prevent form submission and page refresh
    return false;
  }

  filterLastFourGames(): void {
    this.allGames.sort(
      (a, b) =>
        new Date(b._createdOn).getTime() - new Date(a._createdOn).getTime()
    );

    this.allGames = this.allGames.slice(0, 4);
  }
}
