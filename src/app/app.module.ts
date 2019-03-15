import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PrHeaderComponent } from "./pr-header/pr-header.component";
import { ProviderDetailsComponent } from "./provider-details/provider-details.component";
import { ClaimRejectionDetailsComponent } from "./claim-rejection-details/claim-rejection-details.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PrHeaderComponent,
    ProviderDetailsComponent,
    ClaimRejectionDetailsComponent,
    SideBarComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
