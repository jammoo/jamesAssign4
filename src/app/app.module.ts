/* James Bhagoutie 991554085 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterModule } from './modules/headerfooter/headerfooter.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './modules/material-ui/material-ui.module';
import { BhagoutieComponent } from './bhagoutie/bhagoutie.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BhagoutieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderFooterModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
