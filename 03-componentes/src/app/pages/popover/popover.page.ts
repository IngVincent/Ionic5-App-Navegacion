import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento)
  {
const popover = await this.popoverCtrl.create({
  component: PopinfoComponent, 
   event: evento,  //para obtener cordenada del boton
   mode: 'ios',
   backdropDismiss: false //para que no se cierre el pop over dando click afuera
});

await popover.present();

//const {data} = await popover.onDidDismiss(); //imprime primero padre y luego hijo
const {data} = await popover.onWillDismiss();

console.log('Padre:', data);
  }
}
