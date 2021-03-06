import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
