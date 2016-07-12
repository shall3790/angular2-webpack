import { provideRouter, RouterConfig }  from '@angular/router';

import { AboutComponent }               from './about/about.component';
import { ContactComponent }             from './contact/contact.component';

const routes: RouterConfig = [
    { path: '', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
