import { Component, OnInit, Input } from '@angular/core';
import { PriceComponent } from './components/PriceComponent';
import { CustomEditorComponent } from './components/CustomEditorComponent';
import { ProductComponent } from './components/ProductComponent';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    onAdd(rec) {
          console.log(rec);
    }
}
