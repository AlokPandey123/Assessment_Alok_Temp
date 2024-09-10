import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'add-data', loadChildren:()=>import('./add-data/add-data.module').then(m=>m.AddDataModule)},
  {path: 'view-data', loadChildren:() => import('./view-data/view-data.module').then(m=>m.ViewDataModule)},
  { path: '', redirectTo: '/add-data', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
