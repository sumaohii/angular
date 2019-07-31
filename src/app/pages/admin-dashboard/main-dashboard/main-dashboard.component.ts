import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import { NonKycUser } from 'src/app/models/non-kyc-user';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  showtable: boolean;
  allUser: NonKycUser[];
  abc:any;
  constructor(private adminService: AdminService) { }
   
  ngOnInit() {
    this.showtable = false;
  }
toggleShowtable(){
  this.showtable = !this.showtable;
}
fecthAll(){
  if(this.showtable == true)
   console.log("true");
   else console.log("false");
  this.adminService.fetchAllNonKyc().subscribe((res)=>{
    console.log(res);
    this.allUser = res.data;
  })
}
}
