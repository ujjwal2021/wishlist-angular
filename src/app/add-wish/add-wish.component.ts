import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../shared/model/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish.component.html',
  styleUrl: './add-wish.component.css',
})
export class AddWishComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  wishText: string = '';
  addWishItem() {
    if (this.wishText.length === 0) return;
    this.addWish.emit(new WishItem(this.wishText));
  }
}
