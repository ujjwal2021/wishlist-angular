import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/model/wishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes: WishItem[] = []
  toggleItem(item: WishItem){
    item.isComplete = !item.isComplete
  }
}
