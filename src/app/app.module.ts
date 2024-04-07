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
import {MatIconModule } from '@angular/material/icon';
import { DialgBoxComponent } from './dialg-box/dialg-box.component';
import { HeaderComponent } from './flex-box/header/header.component';
import { LearnSubjectComponent } from './Subject/learn-subject/learn-subject.component';
import { Comp2Component } from './Subject/comp2/comp2.component';
import { Comp3Component } from './Subject/comp3/comp3.component';
import { MatInputModule } from '@angular/material/input';
import { ServerSidePaginComponent } from './server-side-pagin/server-side-pagin.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintComponentRandDComponent } from './print-component-rand-d/print-component-rand-d.component';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ApiHitComponent,
    TestComponentComponent,
    CardComponentComponent,
    SwitchIconComponentComponent,
    FlexBoxComponent,
    DialgBoxComponent,
    HeaderComponent,
    LearnSubjectComponent,
    Comp2Component,
    Comp3Component,
    ServerSidePaginComponent,
    PrintComponentRandDComponent
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
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
