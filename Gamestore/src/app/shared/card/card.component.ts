import { Component, Input } from '@angular/core';
import { IGameBuyerDataReturnData, IGameReturnData } from 'src/app/models/gameInterfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input() game!:
    | IGameReturnData
    | IGameBuyerDataReturnData
  idGame!: string;
  idOfferOwner!: string;

  ngOnInit(): void {
    if (this.game.idGame) {
      this.game._id = this.game.idGame;
    }
  }
}
