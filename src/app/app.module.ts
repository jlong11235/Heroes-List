import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroService } from './services/hero.service';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HerosComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }
