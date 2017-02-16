import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <site-header></site-header>
            <router-outlet></router-outlet>
            <site-newsletter></site-newsletter>
            <site-footer></site-footer>
            `,
})
export class AppComponent  {
    name = 'Angular';
    pagetitle: string = "";
}
