import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/model/wishItem';
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];
@Component({
  selector: 'list-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-filter.component.html',
  styleUrl: './list-filter.component.css',
})
export class ListFilterComponent implements OnInit {
  ngOnInit(): void {
    this.updateFilter('0');
  }
  filterValue: any = '0';

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
