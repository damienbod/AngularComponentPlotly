import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide } from '@angular/core';
import { Angular2plotlyAppComponent, environment } from './app/';
import { Configuration } from './app/app.constants';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2plotlyAppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration,
]).catch(err => console.error(err));

