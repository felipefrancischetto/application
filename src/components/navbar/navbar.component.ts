import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
  @Input() titlePage: String

  constructor() {

  }

}
