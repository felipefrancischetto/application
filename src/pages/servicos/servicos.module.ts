import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ServicosPage } from './servicos';
import { ComponentsModule } from '../../components/components'

@NgModule({
  declarations: [
    ServicosPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ServicosPage)
  ],
  entryComponents: [
    ServicosPage
  ]
})

export class ServicosModule{}
