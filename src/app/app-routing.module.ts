import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { CreatecvpageComponent } from './components/createcvpage/createcvpage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';

const routes: Routes = [
  { path: "home", component: HomepageComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginpageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "addcv", component: CreatecvpageComponent },
  { path: "profile", component: ProfilepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
