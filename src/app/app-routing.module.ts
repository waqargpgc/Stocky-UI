import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AccountLayout, DefaultLayout } from './@theme/layouts';

const routes: Routes = [
  {
    path: 'account', component: AccountLayout,
    // canActivate: [OnlyLoggedInUsers],
    loadChildren: () => import('./stock/account/account.module')
      .then(m => m.AccountModule)
  },
  {
    path: 'inv', component: DefaultLayout,
    loadChildren: () => import('./stock/inventory/inventory.module')
      .then(m => m.InventoryModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'inv', pathMatch: 'full' },
  { path: '**', redirectTo: 'inv' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
