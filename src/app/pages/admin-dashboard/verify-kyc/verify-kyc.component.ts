import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import { NonKycUser } from 'src/app/models/non-kyc-user';
@Component({
  selector: 'app-verify-kyc',
  templateUrl: './verify-kyc.component.html',
  styleUrls: ['./verify-kyc.component.css']
})
export class VerifyKycComponent implements OnInit {
  allUser: NonKycUser[];
  abc:any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.fetchAllNonKyc().subscribe((res)=>{
      console.log(res);
      this.allUser = res.data;
    })
  }

}
