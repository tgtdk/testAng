import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { DxSwitchModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { DxDataGridModule, DxDropDownBoxModule, DxListModule, DxTreeViewComponent, DxTreeViewModule } from 'devextreme-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ApiHitComponent } from './api-hit/api-hit.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { SwitchIconComponentComponent } from './switch-icon-component/switch-icon-component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import {MatDialogModule } from '@angular/material/dialog';
import { DialgBoxComponent } from './dialg-box/dialg-box.component';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ApiHitComponent,
    TestComponentComponent,
    CardComponentComponent,
    SwitchIconComponentComponent,
    FlexBoxComponent,
    DialgBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxDataGridModule,
    FlexLayoutModule,
    FormsModule,
    DxSwitchModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
