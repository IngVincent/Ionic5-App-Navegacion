import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesprogresBarPage } from './pagesprogres-bar.page';

const routes: Routes = [
  {
    path: '',
    component: PagesprogresBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesprogresBarPageRoutingModule {}
