import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-multi-level-tree-grid',
  template: `
    <h2>Multi Level tree</h2>
    <db-ngtreegrid [data]="multilevel_products" [configs]="multilelvel_configs"></db-ngtreegrid>
    <p>An array can be given to the group_by config for grouping data by multiple fields.
    </p>
    <iframe #iframe type="text/javascript" width="100%" height="500px" style="margin: 50px 0 0 0;border:0">
  </iframe>
  `,
})
export class MultilevelTreeGridComponent {
  multilevel_products: any[] = [
      { product_type: 'Book', name: 'Angular', price: 90, marketer: 'XY', author: 'Sam' },
      { product_type: 'Book', name: 'Python', price: 70, marketer: 'XY', author: 'Lam' },
      { product_type: 'Book', name: 'PHP', price: 80, marketer: 'XY', author: 'Sam' },
      { product_type: 'Book', name: 'Java', price: 50, marketer: 'AB', author: 'Lam' },
      { product_type: 'Electronic', name: 'Mouse', price: 50, marketer: 'AB', author: 'Sam' },
      { product_type: 'Electronic', name: 'Earphone', price: 20, marketer: 'XY', author: 'Lam' },
      { product_type: 'Electronic', name: 'Head Phone', price: 40, marketer: 'XY', author: 'Lam' },
      { product_type: 'Electronic', name: 'Speaker', price: 45, marketer: 'AB', author: 'Lam' },
      { product_type: 'Electronic', name: 'Hard Drive', price: 55, marketer: 'XY', author: 'Lam'}
    ];
    multilelvel_configs: any = {
      'group_by': ['product_type', 'marketer', 'author'],
      'group_by_header': ['Product Type', 'Marketer', 'Author'],
      'group_by_width': '100px',
      'data_loading_text': 'Loading data...',
      'actions': {
        'add': true,
        'edit': true,
        'delete': true
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

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/588da656774a22db4b4363e20f23b54c.js";

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