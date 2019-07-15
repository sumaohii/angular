import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth : AuthService ,private router:Router) { }

  ngOnInit() {
    
  }

  // logout()
  // {
  //   this.auth.logout().subscribe(data => {
  //     if(data.success){
  //       this.router.navigateByUrl('/welcome');
  //     }
  //   })
  // }
  deleteToken() {
    localStorage.removeItem("ACCESS_TOKEN");
  }
}
