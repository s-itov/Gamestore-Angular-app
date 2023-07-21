import { Component, OnInit } from '@angular/core';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';
import { UserCrudService } from '../user-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

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
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idGame = params.get('id');

      this.globalLoaderService.showLoader();

      this.userCRUD.getOfferById(idGame).subscribe({
        next: (response) => {
          this.game = response;
          this.globalLoaderService.hideLoader();
        },
        error: (msg) => {
          this.globalLoaderService.hideLoader();
          console.log(msg);
        },
      });
    });
  }
}
