import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SignupComponent } from './components/user/sing-up/sign-up.component';
import { RegistrationSuccessComponent } from './components/user/sing-up/RegistrationSuccess.component';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddOrganizationComponent } from './components/adminsetup/EntitySetup/AddOrganization.component';
import { ProductKeyComponent } from './components/adminsetup/ProductKey.component';
import { InviteAdminComponent } from './components/adminsetup/InviteAdmin/InviteAdmin.component';
import { CheckProductKeyComponent } from './components/adminsetup/CheckProductKey/CheckProductKey.component';
//import { EditOrganizationComponent } from './components/adminsetup/EntitySetup/EditOrganization.component';
import { AuditComponent } from './components/adminsetup/Audit/audit.component';
import { InviteISMSComponent } from './components/adminsetup/InviteISMS/InviteISMS.component';
import { ISMSOrganizationSetup } from './components/ISMSManager/ISMSOrganizationSetup.component';
import { EntityInformationComponent } from './components/ISMSManager/OrganizationSetup/EntityInformation/EntityInformation.component';
import { OrganizationSetupComponent } from './components/ISMSManager/OrganizationSetup/OrganizationSetup.component';
import { OrganizationChartComponent } from './components/ISMSManager/OrganizationSetup/OrganizationChart/OrganizationChart.component';
import { ClassificationLevelComponent } from './components/ISMSManager/OrganizationSetup/ClassificationLevel/ClassificationLevel.component';
import { AddClassificationLevelComponent } from './components/ISMSManager/OrganizationSetup/ClassificationLevel/AddClassificationLevel.component';

//SetupCompleted
import { SetupCompletedComponent } from './components/ISMSManager/OrganizationSetup/SetupComplete/SetUpComplete.component';

//Start Project
import { StartProjectComponent} from './components/ISMSManager/OrganizationSetup/StartProject/StartProject.component';
import { appRoutes } from './routes';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        SignupComponent,
        RegistrationSuccessComponent,
        UserComponent,
        SignInComponent,
        DashboardComponent,
        AddOrganizationComponent,
        ProductKeyComponent,
        InviteAdminComponent,
        CheckProductKeyComponent,
        InviteISMSComponent,
        //EditOrganizationComponent,
        AuditComponent,
        ISMSOrganizationSetup,
        OrganizationSetupComponent,
        EntityInformationComponent,
        OrganizationChartComponent,
        ClassificationLevelComponent,
        AddClassificationLevelComponent,
        SetupCompletedComponent,
        StartProjectComponent,
        HomeComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppModuleShared {
}
