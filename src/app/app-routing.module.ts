import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CatsComponent } from './cats/cats.component';
import { FoxesComponent } from './foxes/foxes.component';
import { ShibeComponent } from './shibe/shibe.component';
import { DogsComponent } from './dogs/dogs.component';
import { BunniesComponent } from './bunnies/bunnies.component';
import { LlamasComponent } from './llamas/llamas.component';
import { AlpacasComponent } from './alpacas/alpacas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'Home'},
  {path:'Home',component:HomePageComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Cats',component:CatsComponent},
  {path:'Foxes',component:FoxesComponent},
  {path:'Shibe',component:ShibeComponent},
  {path:'Dogs',component:DogsComponent},
  {path:'Bunnies',component:BunniesComponent},
  {path:'Llamas',component:LlamasComponent},
  {path:'Alpacas',component:AlpacasComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
