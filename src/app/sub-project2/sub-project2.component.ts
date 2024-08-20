import { Component, OnInit } from '@angular/core';

interface License {
  LicenseName: string;
  maxUsers: string;
  validUpto: string;
  domain: string;
  IsActive: string;
  UploadedDate: string;
}

@Component({
  selector: 'app-sub-project2',
  templateUrl: './sub-project2.component.html',
  styleUrls: ['./sub-project2.component.css']
})
export class SubProject2Component implements OnInit {

  displayedColumns: string[] = ['LicenseName', 'maxUsers', 'validUpto', 'domain', 'IsActive', 'UploadedDate', 'action'];
  licenses: License[] = [
    {
      "LicenseName": "License10",
      "maxUsers": "10",
      "validUpto": "2024-08-15 18:30:00.0000000 +00:00",
      "domain": "olamdomain.com",
      "IsActive": "true",
      "UploadedDate": "2024-08-15 18:30:00.0000000 +00:00"
    },
    {
      "LicenseName": "License20",
      "maxUsers": "20",
      "validUpto": "2024-08-16 18:30:00.0000000 +00:00",
      "domain": "olamdomain.com",
      "IsActive": "true",
      "UploadedDate": "2024-09-15 18:30:00.0000000 +00:00"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  deleteLicense(license: License): void {
    const index = this.licenses.indexOf(license);
    if (index >= 0) {
      this.licenses.splice(index, 1);
    }
  }

}
