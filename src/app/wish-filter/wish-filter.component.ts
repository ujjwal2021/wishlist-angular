import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WishItem } from '../../shared/model/wishItem';
import { FormsModule } from '@angular/forms';
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,

]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {

  ngOnInit(): void {
      this.filter.emit(filters[0])
  }
  @Output() filter = new EventEmitter<any>();
  listFilter :any = "0"
  changeFilter(value: any){
    this.filter.emit();
  }
}
