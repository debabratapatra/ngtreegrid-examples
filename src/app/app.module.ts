import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { HelloComponent } from './hello.component';
import { NgtreegridModule } from 'ngtreegrid';
import { PriceComponent } from './components/PriceComponent';
import { EditorComponent } from './components/EditorComponent';
import { ProductComponent } from './components/ProductComponent';
import { BasicTreeGridComponent } from './components/Examples/BasicTreeGridComponent';
import { MultilevelTreeGridComponent } from './components/Examples/MultilevelTreeGridComponent';
import { AddEditDeleteComponent } from './components/Examples/AddEditDeleteComponent';
import { CondRowEditComponent } from './components/Examples/CondRowEditComponent';
import { CustomViewComponent } from './components/Examples/CustomViewComponent';
import { CustomEditorComponent } from './components/Examples/CustomEditorComponent';
import { EditDeleteResolverComponent } from './components/Examples/EditDeleteResolverComponent';
import { FilterComponent } from './components/Examples/Filter.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    NgtreegridModule, 
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    PriceComponent, 
    EditorComponent, 
    ProductComponent,
    BasicTreeGridComponent,
    MultilevelTreeGridComponent,
    AddEditDeleteComponent,
    CondRowEditComponent,
    CustomViewComponent,
    CustomEditorComponent,
    FilterComponent,
    EditDeleteResolverComponent
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [PriceComponent, EditorComponent, ProductComponent]
})
export class AppModule { }
