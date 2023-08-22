//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { AnalyticsService } from "./app/shared/analytics.service";
import { importProvidersFrom } from "@angular/core";
import { AppRoutingModule } from "./app/app-routing.module";

//import { AppModule } from './app/app.module';


/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/

  bootstrapApplication(AppComponent, {
    providers : [AnalyticsService, importProvidersFrom(AppRoutingModule)]
  });