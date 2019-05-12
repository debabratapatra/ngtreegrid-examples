import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-cell-component',
  template: `
    <div>{{'$'+cell_value}}</div>
  `,
})
export class PriceComponent {
  @Input()
  cell_value: string;
}