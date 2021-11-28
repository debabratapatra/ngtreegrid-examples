import { Component, ViewChild, ElementRef } from '@angular/core';
import {PriceComponent} from './../PriceComponent';

@Component({
  selector: 'app-view-tree-grid',
  templateUrl: 'htmls/customview.component.html'
})
export class CustomViewComponent {
  products: any[] = [
      { product_type: 'Book', name: 'Angular', price: 90 },
      { product_type: 'Book', name: 'Python', price: 70 },
      { product_type: 'Book', name: 'PHP', price: 80 },
      { product_type: 'Book', name: 'Java', price: 50 },
      { product_type: 'Electronic', name: 'Mouse', price: 50 },
      { product_type: 'Electronic', name: 'Earphone', price: 20 },
      { product_type: 'Electronic', name: 'Speaker', price: 45 },
      { product_type: 'Electronic', name: 'Hard Drive', price: 55 }
    ];
    configs: any = {
      css: { // Optional
        expand_class: 'fa fa-caret-right',
        collapse_class: 'fa fa-caret-down',
        add_class: 'fa fa-plus',
        edit_class: 'fa fa-pencil',
        delete_class: 'fa fa-trash',
        save_class: 'fa fa-save',
        cancel_class: 'fa fa-remove',
      },
      'columns': [{
        'header': 'Product Name',
        'name': 'name',
        'sortable': false,
        'hidden': false
      }, {
        'header': 'Price',
        'name': 'price',
        'width': '200px',
        'type': 'custom',
        'component': PriceComponent,
        'group_aggregator': (array) => {
          const prices = array.map((item) => item.price);
          return '$' + prices.reduce((acc, item) => Number(acc) + Number(item));
        }
      }],
      'group_by': 'product_type',
      'group_by_header': 'Product Type',
      'group_by_width': '100px'
    };
}