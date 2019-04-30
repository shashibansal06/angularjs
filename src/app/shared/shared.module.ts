import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SharedComponent } from './shared.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BannerComponent,
    AdminHeaderComponent,
    SharedComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BannerComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ]
})
export class SharedModule { }
