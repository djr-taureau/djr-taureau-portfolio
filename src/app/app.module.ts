import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryModule } from '@ngx-gallery/core';


@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    // core & shared
    CoreModule,
    SharedModule,

    // projects
    StaticModule,
    SettingsModule,
    GalleryModule.forRoot(),
    // app
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
