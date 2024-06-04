import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalesComponent } from '../utils/modales/modales.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pesoForm=this.fb.group({
    medida:[],
    unidad:[]
  })
  public alturaForm=this.fb.group({
    medida:[]
  })

  public errorPeso:boolean=false;
  public errorAltura:boolean=false;
  public peso:number=0;
  public imc:number;

  constructor(private fb:FormBuilder,private alert:AlertController, private modalController:ModalController) {
    this.pesoForm.get('medida').valueChanges.subscribe(() => {
      this.errorPeso = false;
    });

    this.alturaForm.get('medida').valueChanges.subscribe(() => {
      this.errorAltura = false;
    });
  }

  calcular(){
    // console.log(this.pesoForm.get('medida').value);
    console.log(this.pesoForm.get('unidad').value);
    // console.log(this.alturaForm.get('medida').value);

    if(this.pesoForm.get('unidad').value==="2"){
      this.peso=this.pesoForm.get('medida').value*0.453592;
    } else{
      this.peso=this.pesoForm.get('medida').value;
    }
    if(this.peso>0 && this.alturaForm.get('medida').value>0){
      this.imc=this.peso/((this.alturaForm.get('medida').value/100)*(this.alturaForm.get('medida').value/100));
      this.openModal(this.imc);
    }else{
      this.errorAltura=true;
      this.errorPeso=true;
    }
  }


async openModal(imc:number){
  const modal= await this.modalController.create({
    component:ModalesComponent,
    componentProps:{
      imc:imc
    }

  });

  modal.present();
}

}
