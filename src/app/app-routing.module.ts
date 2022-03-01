import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: "registro", component: RegistroComponent, children: [
                                                              {path:'', component: FormularioRegistroComponent}]},
  {path: "home", component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
