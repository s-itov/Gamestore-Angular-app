import { Component } from '@angular/core';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from 'src/app/user/user-crud.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  allGames: IGameReturnData[] = [];

  constructor(private userCRUD: UserCrudService) {}

  ngOnInit(): void {
    this.userCRUD.getAllGames().subscribe({
      next: (response) => {
        this.allGames = response;
        this.filterLastFiveGames();
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  private filterLastFiveGames(): void {
    this.allGames.sort((a, b) => new Date(b._createdOn).getTime() - new Date(a._createdOn).getTime());
    
    this.allGames = this.allGames.slice(0, 5);
  }
}
