import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { BibleStudyComponent } from './bible-study.component';

import { BibleStudyRoutingModule } from './bible_study-routing.module';

@NgModule({
  imports: [
    BibleStudyRoutingModule,
    ChartsModule
  ],
  declarations: [ BibleStudyComponent ]
})
export class BibleStudyModule { }
