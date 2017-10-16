import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeroListComponent } from "./hero/hero-list.component";
import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [
    { path: 'crisis-center', component: AppComponent },
    { path: 'hero', component: HeroListComponent },
    // children: [
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login Form' }
    },
    // ],
    {
        path: '',
        redirectTo: '/hero',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];