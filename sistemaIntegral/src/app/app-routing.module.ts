import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LayoutComponent } from './layout/layout.component';
import { SitiosWebComponent } from './sitios-web/sitios-web.component';
import { SistemaDesktopComponent } from './sistema-desktop/sistema-desktop.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
      path:'',
        component:HomeComponent
      },
      {
        path:'inicio',
        component:HomeComponent
      },
      {
        path:'galeria',
        component:GaleriaComponent
      },
      {
        path:'servicios',
        component:ServiciosComponent
      },
      {
        path:'sitios-web',
        component:SitiosWebComponent
      },
      {
        path:'sistema-desktop',
        component:SistemaDesktopComponent
      },
      {
        path:'soporte-tecnico',
        component:SoporteTecnicoComponent
      }

    ]
  },
 
  {
    path:'**',
    component:PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
