import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EventService } from '../../shared/services/EventService';
import { WishItem } from '../../shared/model/wishItem';
@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  @Output() event = new EventEmitter<any>();

  constructor(private events: EventService) {}

  get cssClasses() {
    return { 'strikeout text-muted': this.wish.isComplete };
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggle() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
