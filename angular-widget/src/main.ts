import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

(async () => {
  const app = await createApplication(appConfig);
  if (!customElements.get('portfolio-experience')) {
    const element = createCustomElement(AppComponent, { injector: app.injector });
    customElements.define('portfolio-experience', element);
  }
})();
