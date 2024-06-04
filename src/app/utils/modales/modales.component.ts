import { Component, Input, OnInit, input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.scss'],
})
export class ModalesComponent  implements OnInit {

  name: string;
  @Input()imc:number;
  public mensaje:string='';
  public color:string='';

  constructor(private modalCtrl: ModalController) {}
  ngOnInit(): void {
    this.imc=Math.fround(this.imc);
    if (this.imc < 18.5) {
      this.color = 'red'; // Bajo peso
      this.mensaje = 'Bajo peso';
    } else if (this.imc >= 18.5 && this.imc < 25) {
      this.color = 'green'; // Peso normal
      this.mensaje = 'Peso normal';
    } else if (this.imc >= 25 && this.imc < 30) {
      this.color = 'orange'; // Sobrepeso
      this.mensaje = 'Sobrepeso';
    } else {
      this.color = 'red'; // Obesidad
      this.mensaje = 'Obesidad';
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }



}
