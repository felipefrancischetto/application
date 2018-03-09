import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'nova-atividade',
  templateUrl: 'nova-atividade.html'
})
export class NovaAtividadeComponent {

  public title: string = 'NOVA ATIVIDADE';

  constructor(public navCtrl: NavController) {}

  FecharNovaAtividade() {
    this.navCtrl.pop();
  }

}
