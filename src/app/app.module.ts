import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// cambio idioma de local

import localeESAR from '@angular/common/locales/es-AR';
import localeFR from '@angular/common/locales/fr'

// esta es una funcion para cambiar el idioma
import { registerLocaleData } from '@angular/common';

// regitrar el idioma

registerLocaleData(localeESAR);
registerLocaleData(localeFR);





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
    
    
  ],

  // en los providers va el cambio que hice del idioma en el local
  providers: [
    {
      
      provide: LOCALE_ID, useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
