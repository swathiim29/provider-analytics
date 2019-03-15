import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pr-header",
  templateUrl: "./pr-header.component.html",
  styleUrls: ["./pr-header.component.css"]
})
export class PrHeaderComponent implements OnInit {
  title = "Provider & Claim Analytics";

  constructor() {}

  ngOnInit() {}
}
