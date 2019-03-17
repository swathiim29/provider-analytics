import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  title:"Criteria for Rating";
  description:"2.No.of compliants<br>2.No.of compliants<br>3.No.of missed SLAs<br>";
  constructor() { }

  ngOnInit() {
  }

}
