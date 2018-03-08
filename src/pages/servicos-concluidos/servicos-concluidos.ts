import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'servicos-concluidos',
  templateUrl: 'servicos-concluidos.html'
})
export class ServicosConcluidosPage {

  public title: string = 'Serviços Concluídos';
  constructor(public navCtrl: NavController) {

  }

}
