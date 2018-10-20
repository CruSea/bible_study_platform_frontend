import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { YearComponent } from './year.component';
import { YearViewComponent } from 'app/views/year/year-view.component';

const routes: Routes = [
  {
    path: '',
    component: YearComponent,
    data: {
      title: 'years'
    }
  },
  {
    path:'view',
    component: YearViewComponent,
    data: {
        title: 'by year'
      }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearRoutingModule {}
