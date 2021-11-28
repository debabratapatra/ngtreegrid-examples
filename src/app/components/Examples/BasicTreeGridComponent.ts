import { Component, ViewChild } from '@angular/core';
import { NgtreegridComponent } from 'ngtreegrid';

@Component({
  selector: 'app-basic-tree-grid',
  templateUrl: 'htmls/basic.component.html'
})
export class BasicTreeGridComponent {
  @ViewChild('angularGrid') angularGrid: NgtreegridComponent;
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
      'columns': [{
        'header': 'Product Name',
        'name': 'name',
        'sortable': false,
        'hidden': false
      }, {
        'header': 'Price',
        'name': 'price',
        'width': '200px',
        'renderer': (value, rec) => {
          return '$' + value;
        },
        'group_aggregator': (array) => {
          const prices = array.map((item) => item.price);
          return '$' + prices.reduce((acc, item) => Number(acc) + Number(item));
        }
      }],
      css: { // Optional
        expand_class: 'fa fa-caret-right',
        collapse_class: 'fa fa-caret-down',
      },
      'group_by': 'product_type',
      'group_by_header': 'Product Type',
      'group_by_width': '100px'
    };

    collapseAll() {
      this.angularGrid.collapseAll();
    }
  
    expandAll() {
      this.angularGrid.expandAll();
    }
}