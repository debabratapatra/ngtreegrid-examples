import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-cond-row-edit',
  template: `
   <h2>Conditional Row Edit, Delete and CSS Class</h2>
    <db-ngtreegrid [data]="cond_products" [configs]="cond_configs"></db-ngtreegrid>
    <p> If some rows in the grid shouldn't be edited or deleted then row_edit_function and row_delete_function methods can be set at the grid level. These methods will get row_data as arguments.
    </p>
    <p> If some rows need to be highlighted in the grid then row_class_function function can be set.
    </p>
    <iframe #iframe type="text/javascript" width="100%" height="400px" style="margin: 50px 0 0 0;border:0">
  </iframe>
  `,
})
export class CondRowEditComponent {
  cond_products: any[] = [
      { product_type: 'Book', name: 'Angular', price: 90 },
      { product_type: 'Book', name: 'Python', price: 70 },
      { product_type: 'Book', name: 'PHP', price: 80 },
      { product_type: 'Book', name: 'Java', price: 50 },
      { product_type: 'Electronic', name: 'Mouse', price: 50 },
      { product_type: 'Electronic', name: 'Earphone', price: 20 },
      { product_type: 'Electronic', name: 'Speaker', price: 45 },
      { product_type: 'Electronic', name: 'Hard Drive', price: 55 }
    ];

    cond_configs: any = {
      'group_by': 'product_type',
      'group_by_header': 'Product Type',
      'group_by_width': '100px',
      'data_loading_text': 'Loading data...',
      'actions': {
        'add': true,
        'edit': true,
        'delete': true,
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
      }],
      'row_delete_function': (row_data) => {
        if (row_data.name === 'Angular') {
          return false;
        } else {
          return true;
        }
      },
      'row_edit_function': (row_data) => {
        if (row_data.name === 'Python') {
          return false;
        } else {
          return true;
        }
      },
      'row_class_function': (row_data) => {
        return 'custom_class';
      }
    };

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/c3f38b710e6e88983627059a45c91583.js";

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