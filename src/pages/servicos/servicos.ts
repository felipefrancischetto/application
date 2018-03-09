import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NovaAtividadeComponent } from './components/novaAtividade/nova-atividade.component';

@Component({
  selector: 'servicos',
  templateUrl: 'servicos.html'
})
export class ServicosPage {
  public title = 'Atividades';

  public clients = [
    { nome: ' CONEXÃO LOCAL LTDA', endereco: ' Rua Fernando Lourenço,237 - 08320-420', tipo: 'Manutenção'},
    { nome: ' PAGAR ME LTDA', endereco: ' Rua Brigadeiro faria Lima Lourenço,237 - 08320-420', tipo: 'Instalação'},
    { nome: ' PADARIA CONEXAO LOCAL LTDA', endereco: ' Rua Fernando Lourenço,237 - 08320-420', tipo: 'Contrato'},
  ]

  constructor(public navCtrl: NavController) {

  }

  AbrirNovaAtividade() {
    this.navCtrl.push(NovaAtividadeComponent);
  }

}
