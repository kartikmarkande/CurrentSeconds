import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondsComponent } from "./views/pages/seconds/seconds.component";


const routes: Routes = [
  { path: '', component: SecondsComponent },
  { path: 'pages', loadChildren: () => import('../app/views/pages/pages.module').then(m => m.PagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
