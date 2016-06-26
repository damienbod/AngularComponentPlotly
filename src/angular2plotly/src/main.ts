import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide } from '@angular/core';
import { Angular2plotlyAppComponent, environment } from './app/';
import { Configuration } from './app/app.constants';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2plotlyAppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration,
]).catch(err => console.error(err));

