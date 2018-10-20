import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { CategoryComponent } from './category.component';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryViewComponent } from './category-view.component';

@NgModule({
  imports: [
    CategoryRoutingModule,
    ChartsModule
  ],
  declarations: [ CategoryComponent, CategoryViewComponent ]
})
export class CategoryModule { }
