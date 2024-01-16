import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/model/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishComponent } from './add-wish/add-wish.component';
import { ListFilterComponent } from './list-filter/list-filter.component';

import { EventService } from '../shared/services/EventService';
import { HttpClientModule } from '@angular/common/http';
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    WishListComponent,
    AddWishComponent,
    ListFilterComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  wishItems: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let idx = this.wishItems.indexOf(wish);
      this.wishItems.splice(idx, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.wishItems = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
  wishText: string = '';

  filter: any;

  get filteredItems() {
    return this.wishItems.filter(this.filter);
  }

  addWishItem(item: WishItem) {
    this.wishItems.push(item);
  }
}
