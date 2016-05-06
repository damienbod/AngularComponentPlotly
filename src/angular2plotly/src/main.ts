import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular2/router';
import { HTTP_PROVIDERS } from '@angular2/http';
import { provide } from '@angular2/core';
import { AppComponent, environment } from './app/';
import { Configuration } from './app/app.constants';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration,
]).catch(err => console.error(err));

