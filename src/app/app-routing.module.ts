import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
<<<<<<< Updated upstream


=======
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard] ,},
>>>>>>> Stashed changes
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  // { path: 'home', pathMatch: 'full', component: LoginComponent, canActivate: [AuthGuard]},
  { path: '', pathMatch: 'full', component: HomeComponent , canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent},


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
