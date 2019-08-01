import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdminService} from '../../../services/admin.service';
import {Router} from '@angular/router';
import {UploadKycImg} from '../../../models/upload-kyc-img'

@Component({
  selector: 'app-verify-kyc',
  templateUrl: './verify-kyc.component.html',
  styleUrls: ['./verify-kyc.component.css']
})
export class VerifyKycComponent implements OnInit {
  id: string;
  userImages: UploadKycImg[];
  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }
   
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('userId');
    this.kycUser();
}
kycUser(){
  this.adminService.userDetail(this.id).subscribe((res) => {
      this.userImages = res.data;
      console.log(res);
  })
}
viewPhoto(){

}
}
