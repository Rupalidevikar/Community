import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account-setting',
    loadChildren: () => import('./account-setting/account-setting.module').then( m => m.AccountSettingPageModule)
  },
  {
    path: 'manage-notification',
    loadChildren: () => import('./manage-notification/manage-notification.module').then( m => m.ManageNotificationPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'help-page',
    loadChildren: () => import('./help-page/help-page.module').then( m => m.HelpPagePageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./about-app/about-app.module').then( m => m.AboutAppPageModule)
  },
  {
    path: 'h1',
    loadChildren: () => import('./h1/h1.module').then( m => m.H1PageModule)
  },
  {
    path: 'h2',
    loadChildren: () => import('./h2/h2.module').then( m => m.H2PageModule)
  },
  {
    path: 'h3',
    loadChildren: () => import('./h3/h3.module').then( m => m.H3PageModule)
  },
  {
    path: 'qrcodegenerator',
    loadChildren: () => import('./qrcodegenerator/qrcodegenerator.module').then( m => m.QrcodegeneratorPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'create-pass',
    loadChildren: () => import('./create-pass/create-pass.module').then( m => m.CreatePassPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'selection-page',
    loadChildren: () => import('./selection-page/selection-page.module').then( m => m.SelectionPagePageModule)
  },
  {
    path: 'comregistration',
    loadChildren: () => import('./comregistration/comregistration.module').then( m => m.ComregistrationPageModule)
  },
  {
    path: 'user-registration',
    loadChildren: () => import('./user-registration/user-registration.module').then( m => m.UserRegistrationPageModule)
  },
  {
    path: 'ur1',
    loadChildren: () => import('./ur1/ur1.module').then( m => m.UR1PageModule)
  },
  {
    path: 'ur2',
    loadChildren: () => import('./ur2/ur2.module').then( m => m.UR2PageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-register',
    loadChildren: () => import('./admin-register/admin-register.module').then( m => m.AdminRegisterPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'admi-home2',
    loadChildren: () => import('./admi-home2/admi-home2.module').then( m => m.AdmiHome2PageModule)
  },


  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  // },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
