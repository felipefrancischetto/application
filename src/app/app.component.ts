import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ServicosPage } from '../pages/servicos/servicos';
import { ServicosConcluidosPage } from '../pages/servicos-concluidos/servicos-concluidos';
import { PerfilPage } from './../pages/perfil/perfil';
import { ReembolsosPage } from './../pages/reembolsos/reembolsos';
import { SuportePage } from '../pages/suporte/suporte';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ServicosPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    // this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Serviços', component: ServicosPage, icon: 'md-checkbox' },
      { title: 'Serviços Concluídos', component: ServicosConcluidosPage, icon: 'md-checkbox' },
      { title: 'Perfil', component: PerfilPage, icon: 'md-contact' },
      { title: 'Reembolsos', component: ReembolsosPage, icon: 'logo-usd' },
      { title: 'Suporte', component: SuportePage, icon: 'md-help-circle' }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString("#246af9");
      splashScreen.hide();
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#0E91D8');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
