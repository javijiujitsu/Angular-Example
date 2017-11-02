import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyNestedInsideComponent } from './my-nested-inside/my-nested-inside.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyNestedInsideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
