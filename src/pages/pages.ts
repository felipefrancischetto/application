import { NgModule } from '@angular/core';

import { ServicosModule } from './servicos/servicos.module';
import { ServicosConcluidosModule } from './servicos-concluidos/servicos-concluidos.module';
import { ReembolsosModule } from './reembolsos/reembolsos.module';
import { PerfilModule } from './perfil/perfil.module';
import { SuporteModule } from './suporte/suporte.module';

@NgModule({
  imports:[
    ServicosModule,
    ServicosConcluidosModule,
    ReembolsosModule,
    PerfilModule,
    SuporteModule
  ]
})

export class PagesModule{}
