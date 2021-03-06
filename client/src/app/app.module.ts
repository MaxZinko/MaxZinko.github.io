import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { Block1Component } from './home/block1/block1.component';
import { Block2Component } from './home/block2/block2.component';
import { Block3Component } from './home/block3/block3.component';
import { Block4Component } from './home/block4/block4.component';
import { Block5Component } from './home/block5/block5.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { RegistrationComponent } from './registration/registration.component';
import { GeneralComponent } from './registration/general/general.component';
import { DetailsComponent } from './registration/details/details.component';
import { PaymentComponent } from './registration/payment/payment.component';
import { InfoComponent } from './registration/info/info.component';
import { TableComponent } from './table/table.component'
const appRoutes:Routes=[
    {
      path:'',
      component:HomeComponent
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'registration',
      component: RegistrationComponent
    },
    {
      path:'table',
      component: TableComponent
    }
    ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Block1Component,
    Block2Component,
    Block3Component,
    Block4Component,
    Block5Component,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    GeneralComponent,
    DetailsComponent,
    PaymentComponent,
    InfoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DpDatePickerModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
