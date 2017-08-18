import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy,
         HashLocationStrategy,
         APP_BASE_HREF } from '@angular/common';

// Routing
import { routing } from './routing/app.routing';

// Modules
import { ContactModule } from './components/contact/contact.module';
import { CoffeeStatsModule } from './components/coffee-stats/coffee-stats.module';
import { HeadersModule  } from './components/header/header.module';
import { SkillModule } from './components/skill/skill.module';
import { SocialLinksModule } from './components/social-links/social-links.module';


// App component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
      CoffeeStatsModule,
    ContactModule,
    HeadersModule,
    SkillModule,
    SocialLinksModule,
    BrowserModule,
    HttpModule,
    RouterModule,
    routing

  ],
  providers: [
    {provide: APP_BASE_HREF,  useValue: '/' },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
