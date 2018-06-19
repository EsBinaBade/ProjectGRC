import { Routes } from '@angular/router';
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
//import { EditOrganizationComponent } from './components/adminsetup/EntitySetup/EditOrganization.component';
import { AuditComponent } from './components/adminsetup/Audit/audit.component';
import { OrganizationSetupComponent } from './components/ISMSManager/OrganizationSetup/OrganizationSetup.component';

import { CheckProductKeyComponent } from './components/adminsetup/CheckProductKey/CheckProductKey.component';

import { ProductKeyComponent} from './components/adminsetup/ProductKey.component';
import { InviteAdminComponent } from './components/adminsetup/InviteAdmin/InviteAdmin.component';
import { InviteISMSComponent } from './components/adminsetup/InviteISMS/InviteISMS.component';
import { ISMSOrganizationSetup } from './components/ISMSManager/ISMSOrganizationSetup.component';
import { EntityInformationComponent } from './components/ISMSManager/OrganizationSetup/EntityInformation/EntityInformation.component';
import { OrganizationChartComponent } from './components/ISMSManager/OrganizationSetup/OrganizationChart/OrganizationChart.component';
import { ClassificationLevelComponent } from './components/ISMSManager/OrganizationSetup/ClassificationLevel/ClassificationLevel.component';
import { AddClassificationLevelComponent } from './components/ISMSManager/OrganizationSetup/ClassificationLevel/AddClassificationLevel.component';

import { SetupCompletedComponent } from './components/ISMSManager/OrganizationSetup/SetupComplete/SetUpComplete.component';

import { StartProjectComponent } from './components/ISMSManager/OrganizationSetup/StartProject/StartProject.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: '/checkProductKey', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'addOrganization', component: AddOrganizationComponent },
    { path: 'edit/Organization/:organizationId', component: AddOrganizationComponent },
    { path: 'productKey', component: ProductKeyComponent},
    { path: 'inviteAdmin', component: InviteAdminComponent },
    { path: 'inviteISMS', component: InviteISMSComponent },
    { path: 'ismsOrganizationsetup', component: ISMSOrganizationSetup },
    { path: 'setupComplete', component: SetupCompletedComponent },
    { path: 'startProject', component: StartProjectComponent },
    { path: 'organizationSetup', component: OrganizationSetupComponent },
    {
        path: 'entityInformation', component: OrganizationSetupComponent,
        children: [{ path: '', component: EntityInformationComponent }]
    },
    {
        path: 'orgChart', component: OrganizationSetupComponent,
        children: [{ path: '', component: OrganizationChartComponent }]
    },
    {
        path: 'classificationlevel', component: OrganizationSetupComponent,
        children: [{ path: '', component: ClassificationLevelComponent }]
    },
    {
        path: 'addClassificationLevel', component: OrganizationSetupComponent,
        children: [{ path: '', component: AddClassificationLevelComponent }]
    },
    {
        path: 'editClassificationLevel/:classificationLevelId', component: OrganizationSetupComponent,
        children: [{ path: '', component: AddClassificationLevelComponent }]
    },
    { path: 'checkProductKey', component: CheckProductKeyComponent },
    //{ path: 'editOrganization', component: EditOrganizationComponent },
    { path: 'audit', component: AuditComponent },

    
    //{ path: 'sign-up', component: SignupComponent },
    { path: 'success', component: RegistrationSuccessComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'user', component: UserComponent },
    //{ path: 'sign-in', component: SignInComponent },
    {
        path: 'sign-up', component: UserComponent,
        children: [{ path: '', component: SignupComponent }]
    },
    {
        path: 'sign-in', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },

    { path: 'fetch-data', component: FetchDataComponent },
    { path: '**', redirectTo: 'home' }
];