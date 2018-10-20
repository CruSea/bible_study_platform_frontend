import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryViewComponent } from 'app/views/category/category-view.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    data: {
      title: 'category'
    }
  },
  {
    path: 'view',
    component: CategoryViewComponent,
    data: {
      title: 'category view'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
