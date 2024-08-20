import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-license-popup',
  templateUrl: './license-popup.component.html',
  styleUrls: ['./license-popup.component.css']
})
export class LicensePopupComponent implements OnInit {

  license = {
    LicenseName: '',
    maxUsers: null,
    validUpto: '',
    domain: '',
    IsActive: true,
    UploadedDate: ''
  };

  selected = 'option2';

  constructor(private dialogRef: MatDialogRef<LicensePopupComponent>) { }

  ngOnInit(): void {
  }

  downloadLicense() {
    // Here, you would typically generate and download the encrypted license
    // For now, we'll just log the license information and close the dialog
    console.log('Downloading Encrypted License:', this.license);
    this.dialogRef.close();
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
