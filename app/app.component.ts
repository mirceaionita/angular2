import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home}   from './home/home';
import {About}     from './about/about';

@Component({
    selector: 'my-app',
    template: `
        <h1>menu</h1>
        <nav>
          <a [routerLink]="['Home']">Home</a>
          <a [routerLink]="['About']">About</a>
        </nav>
        <router-outlet></router-outlet>
      `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/home', name: 'Home', component: Home},
    {path:'/about', name: 'About', component: About}
])
export class AppComponent { }