import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, 
         HashLocationStrategy,
         APP_BASE_HREF } from '@angular/common'

// Services
import { SkillService } from './shared/services/skill.service';

// Routing
import { routing } from './app.routing';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';

// App component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [ 
    SkillService,
    {provide: APP_BASE_HREF,  useValue: '/' },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
  bootstrap: [AppComponent]

})
export class AppModule { }
