import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SuportePage } from './suporte';
import { ComponentsModule } from '../../components/components'

@NgModule({
  declarations: [
    SuportePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SuportePage)
  ],
  entryComponents: [
    SuportePage
  ]
})

export class SuporteModule{}
