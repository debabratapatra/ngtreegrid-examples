import { Component, ViewChild, ElementRef } from '@angular/core';
import {EditorComponent} from './../EditorComponent';
import {PriceComponent} from './../PriceComponent';

@Component({
  selector: 'app-edit-resolver-tree-grid',
  templateUrl: 'htmls/resolver.component.html'
})
export class EditDeleteResolverComponent {
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
      'actions': {
        'add': true,
        'edit': true,
        'delete': true,
        'resolve_add': true,
        'resolve_delete': true,
        'resolve_edit': true
      },
      'columns': [{
        'header': 'Product Name',
        'name': 'name',
        'sortable': false,
        'hidden': false,
        'editable': true
      }, {
        'header': 'Price',
        'name': 'price',
        'width': '200px',
        'type': 'custom',
        'editable': true,
        'component': PriceComponent,
        'editor': EditorComponent,
        'group_aggregator': (array) => {
          const prices = array.map((item) => item.price);
          return '$' + prices.reduce((acc, item) => Number(acc) + Number(item));
        }
      }],
      'group_by': 'product_type',
      'group_by_header': 'Product Type',
      'group_by_width': '100px'
    };

    onRowAdd($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);      
    }

    onRowSave($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);
    }

    onRowDelete($e) {
      const data = $e.data;
      setTimeout(() => {
        $e.resolve();
      }, 1000);
    }

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/80bdacfa9b7c718b1e5a8dbe8ffd2bf4.js";

    ngAfterViewInit() {
      const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        const content = `
            <html>
            <head>
              <base target="_parent">
            </head>
            <body>
            <script type="text/javascript" src="${this.gistUrl}"></script>
            </body>
          </html>
        `;
        doc.open();
        doc.write(content);
        doc.close();
    }
}