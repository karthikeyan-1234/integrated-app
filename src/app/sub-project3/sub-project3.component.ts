import { Component, OnInit } from '@angular/core';
import { LicensePopupComponent } from './components/license-popup/license-popup.component';
import { MatDialog } from '@angular/material/dialog';


interface License {
  LicenseName: string;
  maxUsers: string;
  validUpto: string;
  domain: string;
  IsActive: string;
  UploadedDate: string;
}

@Component({
  selector: 'app-sub-project3',
  templateUrl: './sub-project3.component.html',
  styleUrls: ['./sub-project3.component.css']
})
export class SubProject3Component implements OnInit {

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


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLicensePopup() {
    const dialogRef = this.dialog.open(LicensePopupComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteLicense(license: License): void {
    const index = this.licenses.indexOf(license);
    if (index >= 0) {
      this.licenses.splice(index, 1);
    }
  }

  // Method to handle file selection
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      // Check if the selected file is a .lic file
      const fileExtension = file.name.split('.').pop();
      if (fileExtension === 'lic') {
        console.log('Selected file:', file.name);
        // Process the file here, e.g., upload it to a server
      } else {
        console.error('Invalid file type. Please select a .lic file.');
      }
    }
  }

}
