import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  imports:[
    IonicPageModule
  ],
  declarations: [
    NavbarComponent,
    SideMenuComponent
  ],
  exports: [
    NavbarComponent,
    SideMenuComponent
  ]
})
export class ComponentsModule{}
