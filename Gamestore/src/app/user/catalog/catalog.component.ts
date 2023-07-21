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
}
