import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostTemaComponent } from './post-tema/post-tema.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},//Quando o caminho estiver vazio. Redirecionar para Home. Full, pega toda a rota
  {path: 'home', component: HomeComponent},
  {path:'feed', component: FeedComponent},
  {path: 'login', component: LoginComponent},
  {path:'cadastro',component: CadastroComponent},
  {path: 'post-tema',component:PostTemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
