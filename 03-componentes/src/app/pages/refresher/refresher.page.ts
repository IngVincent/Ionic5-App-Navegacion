import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
items: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  doRefresh( event){
    setTimeout(()=> {

      this.items = Array(40);               //limitar el tiempo de la animación de carga
      event.target.complete();
    },1500);
  }
}
