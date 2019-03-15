import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProviderDetails } from "../model/ProviderDetails";

@Component({
  selector: "app-provider-details",
  templateUrl: "./provider-details.component.html",
  styleUrls: ["./provider-details.component.css"]
})
export class ProviderDetailsComponent implements OnInit {
  highRankProviders: ProviderDetails[] = [];
  lowRankProviders: ProviderDetails[] = [];
  constructor(public httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get("../../assets/providerDetails.json")
      .subscribe((response: ProviderDetails[]) => {
        response.forEach(item => {
          if (item.rating > 5) {
            this.highRankProviders.push(item);
          } else {
            this.lowRankProviders.push(item);
          }
        });
      });
  }
}
