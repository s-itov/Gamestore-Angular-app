import { Component, OnInit } from '@angular/core';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from '../user-crud.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{


  allGames: IGameReturnData[] = [];

  constructor(private userCRUD: UserCrudService) {}

  ngOnInit(): void {

    this.userCRUD.getAllGames().subscribe({
      next: (response) => {
        this.allGames = response;
      },
      error: (err) => {
        alert(err)
      },
    });
  }
}
