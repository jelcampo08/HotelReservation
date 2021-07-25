import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'book-aroom',
    loadChildren: () => import('./book-aroom/book-aroom.module').then( m => m.BookAroomPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'guesthome',
    loadChildren: () => import('./guesthome/guesthome.module').then( m => m.GuesthomePageModule)
  },
  {
    path: 'reserve-room',
    loadChildren: () => import('./reserve-room/reserve-room.module').then( m => m.ReserveRoomPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'rm-classic',
    loadChildren: () => import('./rm-classic/rm-classic.module').then( m => m.RmClassicPageModule)
  },
  {
    path: 'rm-indulgence',
    loadChildren: () => import('./rm-indulgence/rm-indulgence.module').then( m => m.RmIndulgencePageModule)
  },
  {
    path: 'rm-prestige',
    loadChildren: () => import('./rm-prestige/rm-prestige.module').then( m => m.RmPrestigePageModule)
  },
  {
    path: 'rm-twin',
    loadChildren: () => import('./rm-twin/rm-twin.module').then( m => m.RmTwinPageModule)
  },
  {
    path: 'rm-premiere',
    loadChildren: () => import('./rm-premiere/rm-premiere.module').then( m => m.RmPremierePageModule)
  },
  {
    path: 'rm-executive',
    loadChildren: () => import('./rm-executive/rm-executive.module').then( m => m.RmExecutivePageModule)
  },
  {
    path: 'rm-junior',
    loadChildren: () => import('./rm-junior/rm-junior.module').then( m => m.RmJuniorPageModule)
  },
  {
    path: 'rm-pool',
    loadChildren: () => import('./rm-pool/rm-pool.module').then( m => m.RmPoolPageModule)
  },
  {
    path: 'rm-standard',
    loadChildren: () => import('./rm-standard/rm-standard.module').then( m => m.RmStandardPageModule)
  },
  {
    path: 'unconfirm',
    loadChildren: () => import('./unconfirm/unconfirm.module').then( m => m.UnconfirmPageModule)
  },
  {
    path: 'reserve',
    loadChildren: () => import('./reserve/reserve.module').then( m => m.ReservePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
