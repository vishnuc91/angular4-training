import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero/hero-list.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpModule }    from '@angular/http';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  declarations: [AppComponent, HeroListComponent, LoginComponent],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
