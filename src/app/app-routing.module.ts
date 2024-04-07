import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponentComponent } from './card-component/card-component.component';
// import { DialgBoxComponent } from './dialg-box/dialg-box.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { LearnSubjectComponent } from './Subject/learn-subject/learn-subject.component';
import { ServerSidePaginComponent } from './server-side-pagin/server-side-pagin.component';
import { PrintComponentRandDComponent } from './print-component-rand-d/print-component-rand-d.component';

const routes: Routes = [
  {
    path: "",
    component:CardComponentComponent
  },
  {
    path: "card",
    component:CardComponentComponent
  },
  {
    path: "flex",
    component:FlexBoxComponent
  },
  {
    path: "subject",
    component: LearnSubjectComponent
  },
  {
    path: "server-side-paging",
    component: ServerSidePaginComponent
  },
  {
    path: "print-component",
    component: PrintComponentRandDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
