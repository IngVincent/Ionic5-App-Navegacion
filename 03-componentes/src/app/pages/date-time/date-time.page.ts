import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci : Date = new Date();
  customPickerOptions;
  customDate;
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!')
          console.log(evento); //obtiene fecha completa
          console.log(evento.day.value); //obtiene el día seleccionado
        }
        }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
         
        }
      }]  
  };
  }
cambioFecha(event) //evento obtener fecha
{
  console.log('ionChange', event)
  console.log('Date', new Date(event.detail.value)); //convertir a formato js
}


}
