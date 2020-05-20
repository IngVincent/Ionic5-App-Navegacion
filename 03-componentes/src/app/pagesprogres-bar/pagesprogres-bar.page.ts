import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagesprogres-bar',
  templateUrl: './pagesprogres-bar.page.html',
  styleUrls: ['./pagesprogres-bar.page.scss'],
})
export class PagesprogresBarPage implements OnInit {
porcentaje= 0.05;
  constructor() { }

  ngOnInit() {
  }

  cambioRango(event)
  {
    console.log(event);
    this.porcentaje = event.detail.value / 100;
  }
}
