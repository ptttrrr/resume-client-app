import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Services
import { ColorService } from './shared/services/color.service';

// Routing
import { routing } from './app.routing';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [ 
    ColorService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
