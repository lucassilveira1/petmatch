import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'petinfo',
    loadChildren: () =>
      import('./pages/petinfo/petinfo.module').then((m) => m.PetinfoPageModule),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./pages/feed/feed.module').then((m) => m.FeedPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },  {
    path: 'integrantes',
    loadChildren: () => import('./pages/integrantes/integrantes.module').then( m => m.IntegrantesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
