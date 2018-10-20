import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { BibleStudyComponent } from './bible-study.component';

const routes: Routes = [
  {
    path: '',
    component: BibleStudyComponent,
    data: {
      title: 'BibleStudy'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibleStudyRoutingModule {}
