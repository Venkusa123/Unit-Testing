import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstSpecComponent } from './first/first.component';
import { FirstService } from './first/first.service';
import { SecondSpecComponent } from './second/second.component';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routingmodule';
import { AppHighLightDirective } from './custom-directives/highlight-directive';
import { AppService } from './app.service';
import { SecondDirective } from './custom-directives/second-directive';

@NgModule({
  declarations: [
    AppComponent,FirstSpecComponent,SecondSpecComponent,AppHighLightDirective,SecondDirective
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule
  ],
  providers: [FirstService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
