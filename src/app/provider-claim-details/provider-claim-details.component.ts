import { Component, OnInit } from "@angular/core";
import { ProviderDetails } from "../model/ProviderDetails";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-provider-claim-details",
  templateUrl: "./provider-claim-details.component.html",
  styleUrls: ["./provider-claim-details.component.css"]
})
export class ProviderClaimDetailsComponent implements OnInit {
  claimDetails: any[] = [];
  provider: ProviderDetails;
  firstname: any;
  provNum: string;
  rejectedClaimDetails: any;

  constructor(
    public httpClient: HttpClient,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params: any) => {
      this.provNum = params["provNumb"];
      this.httpClient
        .get("../../assets/providerDetails.json")
        .subscribe((response: ProviderDetails[]) => {
          this.provider = response.find(
            (prov: ProviderDetails) => prov.provNumb === this.provNum
          );
        });
      this.httpClient
        .get("../../assets/providerClaimDetails.json")
        .subscribe((responseArr: any[]) => {
          this.rejectedClaimDetails = responseArr.find(
            (item: any) => item.provNumb === this.provNum
          );
          this.claimDetails = this.rejectedClaimDetails.rejectedClaims;
        });
    });
  }
}
