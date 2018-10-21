import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { BibleStudyComponent } from './bible-study.component';
import { AddbsComponent } from 'app/views/bible_study/addbs.component';

const routes: Routes = [
  {
    path: '',
    component: BibleStudyComponent,
    data: {
      title: 'BibleStudy'
    }
  },
  {
    path: 'add',
    component: AddbsComponent,
    data: {
      title: 'create bible study'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibleStudyRoutingModule {}
