import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ServicosPage } from './servicos';
import { ComponentsModule } from '../../components/components'
import { NovaAtividadeComponent } from './components/novaAtividade/nova-atividade.component';

@NgModule({
  declarations: [
    ServicosPage,
    NovaAtividadeComponent,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ServicosPage)
  ],
  entryComponents: [
    ServicosPage,
    NovaAtividadeComponent,
  ]
})

export class ServicosModule{}
