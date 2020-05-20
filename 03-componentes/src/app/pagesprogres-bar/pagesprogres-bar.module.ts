import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesprogresBarPageRoutingModule } from './pagesprogres-bar-routing.module';

import { PagesprogresBarPage } from './pagesprogres-bar.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PagesprogresBarPageRoutingModule
  ],
  declarations: [PagesprogresBarPage]
})
export class PagesprogresBarPageModule {}
