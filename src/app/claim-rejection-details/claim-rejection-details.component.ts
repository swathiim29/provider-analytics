import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-claim-rejection-details",
  templateUrl: "./claim-rejection-details.component.html",
  styleUrls: ["./claim-rejection-details.component.css"]
})
export class ClaimRejectionDetailsComponent implements OnInit {
  claimDetails: any[] = [];

  constructor(public httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get("../../assets/claimRejectionDetails.json")
      .subscribe((response: any[]) => {
        response.forEach((responseItem: any) =>
          this.claimDetails.push(responseItem)
        );
      });
  }
}
