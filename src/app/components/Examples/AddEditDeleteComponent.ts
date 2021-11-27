import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-add-edit-grid',
  templateUrl: 'htmls/edit.component.html'
})
export class AddEditDeleteComponent {
  edit_products: any[] = [
      { product_type: 'Book', name: 'Angular', price: 90 },
      { product_type: 'Book', name: 'Python', price: 70 },
      { product_type: 'Book', name: 'PHP', price: 80 },
      { product_type: 'Book', name: 'Java', price: 50 },
      { product_type: 'Electronic', name: 'Mouse', price: 50 },
      { product_type: 'Electronic', name: 'Earphone', price: 20 },
      { product_type: 'Electronic', name: 'Speaker', price: 45 },
      { product_type: 'Electronic', name: 'Hard Drive', price: 55 }
    ];

    edit_configs: any = {
      'group_by': 'product_type',
      'group_by_header': 'Product Type',
      'group_by_width': '100px',
      'data_loading_text': 'Loading data...',
      'actions': {
        'add': true,
        'edit': true,
        'delete': true,
      },
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
        'editable': true
      }, {
        'header': 'Price',
        'name': 'price',
        'width': '200px',
        'editable': true,
        'group_aggregator': (array) => {
          const prices = array.map((item) => item.price);
          return '$' + prices.reduce((acc, item) => Number(acc) + Number(item));
        }
      }]
    };

    onAdd(event) {

    }

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/2c85453c6faa9cb7beacc241b84b09ea.js";

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