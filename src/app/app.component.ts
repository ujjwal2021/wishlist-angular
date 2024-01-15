import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/model/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishItems: WishItem[] = [
    new WishItem("Lets make a tea", true),
    new WishItem("Lets make a tea again"),
    new WishItem("Lets make a tea thrice"),
  ]
  
  filter: any = () => true;
  
  // get filteredItems(): WishItem[] {
  //   return this.wishItems.filter(this.filter)
  // }
  



}
