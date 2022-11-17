import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';

const routes: Routes = [
  { path:"", component: LoginComponent},
  { path:"top-artists", component: TopArtistsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
