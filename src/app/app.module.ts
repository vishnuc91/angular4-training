import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero/hero-list.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpModule }    from '@angular/http';
import { appRoutes } from './app.routes';

// const appRoutes: Routes = [
//   { path: 'crisis-center', component: AppComponent },
//   { path: 'hero', component: HeroListComponent },
//   // children: [
//   {
//     path: 'login',
//     component: LoginComponent,
//     data: { title: 'Login Form' }
//   },
//   // ],
//   {
//     path: '',
//     redirectTo: '/hero',
//     pathMatch: 'full'
//   },
//   // { path: '**', component: PageNotFoundComponent }
// ];

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
