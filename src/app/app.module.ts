import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports:      [ BrowserModule ],

  declarations: [
     MainComponent,
     MenuComponent,
     ContentComponent 
     ],

  bootstrap:    [ MainComponent ]
})
export class AppModule { }
