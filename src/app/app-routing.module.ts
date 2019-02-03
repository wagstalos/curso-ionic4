import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
     path: 'instalacao', 
     loadChildren: './instalacao/instalacao.module#InstalacaoPageModule'
   },
  { 
    path: 'layout', 
    loadChildren: './layout/layout.module#LayoutPageModule' 
  },
  { 
    path: 'layout-header-footer', 
    loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule'
   },
  { path: 'layout-tabs', loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layout-menu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layout-split', loadChildren: './layout-split/layout-split.module#LayoutSplitPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
