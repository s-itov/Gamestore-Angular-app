import { Component, OnInit } from '@angular/core';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from '../user-crud.service';
import { AuthService } from 'src/app/auth/auth.service';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{

  allGames: IGameReturnData[] = [];

  searchTerm: string = '';
  filteredGames: IGameReturnData[] = [];
  isSubmitted: boolean = false; // Added isSubmitted variable


  constructor(private userCRUD: UserCrudService, private globalLoaderService: GlobalLoaderService ) {}

  ngOnInit(): void {
    this.globalLoaderService.showLoader();
    this.userCRUD.getAllGames().subscribe({
      next: (response) => {
        this.allGames = response;
        this.globalLoaderService.hideLoader();
      },
      error: (err) => {
        this.globalLoaderService.hideLoader()
        alert(err)
      },
    });
  }

  onSearch() {
    this.isSubmitted = true;
    
    if (this.searchTerm.trim() === '') {
      this.filteredGames = this.allGames
    } else {
      this.filteredGames = this.allGames.filter((game: IGameReturnData) =>
        game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    return false;
  }
}
