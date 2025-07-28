import { Routes } from '@angular/router';
import { Login } from './componnents/login/login';
import { SignUp } from './componnents/sign-up/sign-up';
import { Home } from './componnents/home/home';
import { PagePrincipale } from './componnents/page-principale/page-principale';
import { Notfound } from './componnents/notfound/notfound';
import { AddFormation } from './componnents/add-formation/add-formation';

export const routes: Routes = [
    {path:'',redirectTo:'prin',pathMatch:'full'},
    {path:'prin' , component:PagePrincipale},
    {path:'signup', component:SignUp},
    {path:'home', component:Home}, 
    {path:'signin', component:Login},
    {path:'notfounds', component:Notfound},
    {path:'addformation', component:AddFormation},
    {path:'**',component:Notfound}
];
