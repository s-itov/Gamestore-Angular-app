import { Component, Input } from '@angular/core';
import { IGameReturnData } from 'src/app/interfaces/gameInterfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() game!: IGameReturnData;

}
