import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/model/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,

]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishItems: WishItem[] = [
    new WishItem("Lets make a tea", true),
    new WishItem("Lets make a tea again"),
    new WishItem("Lets make a tea thrice"),
  ]
  listFilter :any = "0"
  
  get filteredItems(): WishItem[] {
    return this.wishItems.filter(filters[this.listFilter])
  }
  



}
