import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { FeatureManagementComponent } from './components/featureManagement/feature-management.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [ 
    AppComponent, 
    
    FeatureManagementComponent  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
