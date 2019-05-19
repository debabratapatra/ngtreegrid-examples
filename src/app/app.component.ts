import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
    onAdd(rec) {
          console.log(rec);
    }

    selected_feature = {
      basic_tree_grid: true,
      add_edit_delete: false,
      cond_row_edit: false,
      custom_view_component: false,
      custom_edit_component: false,
      resolve_row_add: false,
      multilevel_tree_grid: false,
    }
  
    select(feature) {
      for (const key in this.selected_feature) {
        if (this.selected_feature.hasOwnProperty(key)) {        
          this.selected_feature[key] = false;
        }
      }
  
      this.selected_feature[feature] = true;
    }
}
