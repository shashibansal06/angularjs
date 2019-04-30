import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { HomeComponent } from './components/home/home.component';

import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/terms/terms.component';
import { UserConcentComponent } from './components/user-concent/user-concent.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';

import { LoginRightsideComponent } from './components/login-rightside/login-rightside.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { DetailsComponent } from './components/details/details.component';
import { GeneralComponent } from './components/details/general/general.component';
import { ProjectComponent } from './components/details/project/project.component';
import { CardComponent } from './components/details/card/card.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { PostJobComponent } from './components/admin/post-job/post-job.component';
import { PostProjectNextComponent } from './components/admin/post-project-next/post-project-next.component';
import { DeleteAccountComponent } from './components/admin/delete-account/delete-account.component';
import { ActivityLogComponent } from './components/admin/activity-log/activity-log.component';
import { NotificationComponent } from './components/admin/notification/notification.component';
import { DevInMatchingComponent } from './components/admin/dev-in-matching/dev-in-matching.component';
import { InterestedDeveloperComponent } from './components/admin/interested-developer/interested-developer.component';
import { MyJobsComponent } from './components/admin/my-jobs/my-jobs.component';
import { UserprofileComponent } from './components/admin/userprofile/userprofile.component';
import { GenDetailComponent } from './components/admin/userprofile/gen-detail/gen-detail.component';
import { RatingComponent } from './components/admin/userprofile/rating/rating.component';
import { PaymentHistoryComponent } from './components/admin/payment-history/payment-history.component';
import { PaymentComponent } from './components/admin/payment/payment.component';
import { FavDeveloperComponent } from './components/admin/fav-developer/fav-developer.component';
import { AccountSettingComponent } from './components/admin/account-setting/account-setting.component';
import { ChangePasswordComponent } from './components/admin/account-setting/change-password/change-password.component';
import { CardDetailComponent } from './components/admin/account-setting/card-detail/card-detail.component';
import { DevDashboardComponent } from './components/admin/dev-dashboard/dev-dashboard.component';
import { DevDashboardDetailComponent } from './components/admin/dev-dashboard-detail/dev-dashboard-detail.component';
import { DevFavouriteProjectComponent } from './components/admin/dev-favourite-project/dev-favourite-project.component';
import { DevJobMatchComponent } from './components/admin/dev-job-match/dev-job-match.component';
import { DevRatingReviewComponent } from './components/admin/dev-rating-review/dev-rating-review.component';
import { MatchComponent } from './components/admin/match/match.component';
import { YourClientsComponent } from './components/admin/your-clients/your-clients.component';
import { CreateDevAccountComponent } from './components/admin/create-dev-account/create-dev-account.component';
import { DevcreateCardDetailComponent } from './components/admin/create-dev-account/devcreate-card-detail/devcreate-card-detail.component';
import { DevcreateEduDetailComponent } from './components/admin/create-dev-account/devcreate-edu-detail/devcreate-edu-detail.component';
import { DevcreateGenDetailComponent } from './components/admin/create-dev-account/devcreate-gen-detail/devcreate-gen-detail.component';
import { ProfileEducationDetailComponent } from './components/admin/profile-education-detail/profile-education-detail.component';
import { ProfileGeneralDetailComponent } from './components/admin/profile-general-detail/profile-general-detail.component';
import { ViewProfileGeneralComponent } from './components/admin/view-profile-general/view-profile-general.component';
import { ViewProfileEducationComponent } from './components/admin/view-profile-education/view-profile-education.component';
import { ViewDevContactEduComponent } from './components/admin/view-dev-contact-edu/view-dev-contact-edu.component';
import { ViewDevContactGenComponent } from './components/admin/view-dev-contact-gen/view-dev-contact-gen.component';


const routes: Routes = [
  { path: '', component: HomeLayoutComponent, children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: 'about-us', component: AboutUsComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'user-concent', component: UserConcentComponent },
    { path: 'faq', component: FaqComponent },

    { path: 'sign-in', component: SignInComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: 'contact-us', component: ContactUsComponent },

    { path: '', component: DetailsComponent,
      children: [
        { path: '', redirectTo: 'details/general', pathMatch: 'full' },
        { path: 'details/general', component: GeneralComponent },
        { path: 'details/project', component: ProjectComponent },
        { path: 'details/card', component: CardComponent }
      ]
    },
    { path: '', component: CreateDevAccountComponent,
        children: [
        { path: '', redirectTo: 'create/gen-detail', pathMatch: 'full' },
        { path: 'create/gen-detail', component: DevcreateGenDetailComponent },
        { path: 'create/edu-detail', component: DevcreateEduDetailComponent },
        { path: 'create/card-detail', component: DevcreateCardDetailComponent }
      ]
    },
  ]},
  { path: '', component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'delete-account', component: DeleteAccountComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'my-projects', component: MyJobsComponent },
      { path: 'interested-developer', component: InterestedDeveloperComponent },
      { path: 'favourite-developer', component: FavDeveloperComponent },
      { path: 'developer-matching', component: DevInMatchingComponent },
      { path: 'activity-log', component: ActivityLogComponent },
      { path: 'post-project-next', component: PostProjectNextComponent },
      { path: 'post-job', component: PostJobComponent },
      { path: 'your-client', component: YourClientsComponent },
      { path: '', component: UserprofileComponent,
        children: [
          { path: '', redirectTo: 'profile/general-detail', pathMatch: 'full' },
          { path: 'profile/general-detail', component: GenDetailComponent },
          { path: 'profile/rating', component: RatingComponent }
        ]
      },
      { path: 'dev/dashboard', component: DevDashboardComponent },
      { path: 'dev/dashboard-detail', component: DevDashboardDetailComponent },
      { path: 'dev/favourite-project', component: DevFavouriteProjectComponent },
      { path: 'dev/job-match', component: DevJobMatchComponent },
      { path: 'dev/rating-review', component: DevRatingReviewComponent },
      { path: 'profile/education', component: ProfileEducationDetailComponent },
      { path: 'profile/general', component: ProfileGeneralDetailComponent },
      { path: 'view/education', component: ViewProfileEducationComponent },
      { path: 'view/general', component: ViewProfileGeneralComponent },
      { path: 'view/dev/contact/education', component: ViewDevContactEduComponent },
      { path: 'view/dev/contact/general', component: ViewDevContactGenComponent },
      { path: '', component: AccountSettingComponent,
        children: [
          { path: '', redirectTo: 'card-detail', pathMatch: 'full' },
          { path: 'card-detail', component: CardDetailComponent },
          { path: 'change-password', component: ChangePasswordComponent }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
export const appRoutingDeclaration = [
  HomeLayoutComponent,
  HomeComponent,
  TermsComponent,
  PrivacyPolicyComponent,
  UserConcentComponent,
  AboutUsComponent,
  FaqComponent,

  LoginRightsideComponent,
  ContactUsComponent,
  ForgotComponent,
  SignupComponent,
  SignInComponent,

  DetailsComponent,
  GeneralComponent,
  ProjectComponent,
  CardComponent,
  AdminLayoutComponent,
  AdminComponent,
  DashboardComponent,
  PostJobComponent,
  PostProjectNextComponent,
  DeleteAccountComponent,
  ActivityLogComponent,
  NotificationComponent,
  UserprofileComponent,
  GenDetailComponent,
  RatingComponent,
  InterestedDeveloperComponent,
  FavDeveloperComponent,
  AccountSettingComponent,
  ChangePasswordComponent,
  CardDetailComponent,
  DevInMatchingComponent,
  DevDashboardComponent,
  DevDashboardDetailComponent,
  DevFavouriteProjectComponent,
  DevJobMatchComponent,
  DevRatingReviewComponent,
  PaymentHistoryComponent,
  PaymentComponent,
  MatchComponent,
  MyJobsComponent,
  YourClientsComponent,
  CreateDevAccountComponent,
  DevcreateCardDetailComponent,
  DevcreateEduDetailComponent,
  DevcreateGenDetailComponent,
  ProfileEducationDetailComponent,
  ProfileGeneralDetailComponent,
  ViewProfileGeneralComponent,
  ViewProfileEducationComponent,
  ViewDevContactEduComponent,
  ViewDevContactGenComponent
];
