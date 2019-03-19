import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProviderDetailsComponent } from "./provider-details/provider-details.component";
import { ClaimRejectionDetailsComponent } from "./claim-rejection-details/claim-rejection-details.component";

import { HomeComponent } from "./home/home.component";
import { ProviderClaimDetailsComponent } from "./provider-claim-details/provider-claim-details.component";

const routes: Routes = [
  { path: "providerDetails", component: ProviderDetailsComponent },

  {
    path: "claimRejectionDetails",
    component: ClaimRejectionDetailsComponent
  },
  {
    path: "providerClaimDetails/:provNumb",
    component: ProviderClaimDetailsComponent
  },

  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
