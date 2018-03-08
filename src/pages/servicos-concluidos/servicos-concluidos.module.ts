import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicosConcluidosPage } from './servicos-concluidos';
import { ComponentsModule } from '../../components/components'

@NgModule({
  declarations: [
    ServicosConcluidosPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ServicosConcluidosPage)
  ],
  entryComponents: [
    ServicosConcluidosPage
  ]
})

export class ServicosConcluidosModule{}
