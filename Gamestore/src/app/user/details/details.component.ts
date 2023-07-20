import { Component, OnInit } from '@angular/core';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from '../user-crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  game!: IGameReturnData;

  constructor(
    private userCRUD: UserCrudService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idGame = params.get('id');
      this.userCRUD.getOfferById(idGame).subscribe({
        next: (response) => {
          this.game = response;
        },
        error: (msg) => {
          console.log(msg);
        },
      });
    });
  }
}
