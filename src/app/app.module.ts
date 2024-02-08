import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { DxDataGridModule, DxDropDownBoxModule, DxListModule, DxTreeViewComponent, DxTreeViewModule } from 'devextreme-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ApiHitComponent } from './api-hit/api-hit.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ApiHitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxDataGridModule,
    FlexLayoutModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
