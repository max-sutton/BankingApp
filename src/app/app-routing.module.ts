import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'accountinfo/:accountNumber', component : AccountinfoComponent},
  { path: 'create-account', component : CreateAccountComponent },
  { path: 'create-transaction', component : CreateTransactionComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
