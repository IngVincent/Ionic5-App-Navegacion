import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
//establecer valor por defecto al segment
@ViewChild(IonSegment) segment: IonSegment;

  categorias = [  'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  ngOnInit()
  {
    this.segment.value = this.categorias[0];
  }

}
