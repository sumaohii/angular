import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdminService} from '../../../services/admin.service';
import {Router} from '@angular/router';
import {UploadKycImg} from '../../../models/upload-kyc-img'
import { AlertService} from '../../../components/alert/alert.service';
@Component({
  selector: 'app-verify-kyc',
  templateUrl: './verify-kyc.component.html',
  styleUrls: ['./verify-kyc.component.css']
})
export class VerifyKycComponent implements OnInit {
  id: string;
  userImages: UploadKycImg[];
  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute, private alert: AlertService) { }
   
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

confirm(){
  this.adminService.confirmKyc(this.id).subscribe((res) => {
    if (res.status==1)
    this.alert.success(res.message+". Redirecting...");
    else if(res.status==0)
    this.alert.error(res.message+". Redirecting...");
    setTimeout(() => {this.router.navigateByUrl('/admin-dashboard');}, 2000);
})
}
decline(){
  this.adminService.declineKyc(this.id).subscribe((res) => {
    if (res.status==1)
    this.alert.error(res.message);
    setTimeout(() => {this.router.navigateByUrl('/admin-dashboard');}, 2000);
})
}
}
