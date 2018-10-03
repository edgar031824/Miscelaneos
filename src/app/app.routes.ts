import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../app/components/home/home.component";
import { UsuarioComponent } from "../app/components/usuario/usuario.component";
import { USER_ROUTES } from "../app/components/usuario/usuario.routes";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
     {path: 'usuario/:id', 
     component: UsuarioComponent,
     children:USER_ROUTES 
    },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);