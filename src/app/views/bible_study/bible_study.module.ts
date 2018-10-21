import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { BibleStudyComponent } from './bible-study.component';

import { BibleStudyRoutingModule } from './bible_study-routing.module';
import { BibleStudyService } from 'app/views/bible_study/bible_study.service';
import { AddbsComponent } from './addbs.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BibleStudyRoutingModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [ BibleStudyComponent, AddbsComponent ],
  providers: [BibleStudyService],
})
export class BibleStudyModule { }
