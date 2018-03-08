import { Component, Input, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { SuportePage } from './../../pages/suporte/suporte';
import { ReembolsosPage } from './../../pages/reembolsos/reembolsos';
import { PerfilPage } from './../../pages/perfil/perfil';
import { ServicosConcluidosPage } from './../../pages/servicos-concluidos/servicos-concluidos';
import { ServicosPage } from './../../pages/servicos/servicos';

@Component({
  selector: 'sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SideMenuComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ServicosPage;

  pages: Array<{title: string, component: any}>;

  constructor() {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Serviços', component: ServicosPage },
      { title: 'Serviços Concluídos', component: ServicosConcluidosPage },
      { title: 'Perfil', component: PerfilPage },
      { title: 'Reembolsos', component: ReembolsosPage },
      { title: 'Suporte', component: SuportePage }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
