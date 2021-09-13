import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../auth/pages/register/register.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { ConfirmationRoutingModules } from './confirmation-routin.modules';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AccueilComponent,
    HomeComponent,
    NavbarComponent,
    MapComponent,
  ],
  imports: [CommonModule, ConfirmationRoutingModules],
})
export class ConfirmationModule {}
