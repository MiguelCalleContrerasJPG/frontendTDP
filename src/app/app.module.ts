import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< Updated upstream
import { AuthGuard } from './guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { LoginService } from './components/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    HttpClientModule
  ],
  providers: [AuthGuard],
=======
    ReactiveFormsModule 
  ],
  providers: [AuthGuard,LoginService],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
