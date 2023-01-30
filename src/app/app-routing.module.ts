import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SetlistComponent } from './setlist/setlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"", component: HomeComponent},
  { path:"home", component: HomeComponent},
  { path:"setlist", component: SetlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
