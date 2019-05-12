import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-cell-component',
  template: `
    <a href="https://github.com/debabratapatra/ngtreegrid">{{cell_value}}</a>
  `,
})
export class ProductComponent {
  @Input()
  cell_value: string;
}