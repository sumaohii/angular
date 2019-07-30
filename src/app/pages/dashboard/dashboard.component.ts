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
    sessionStorage.removeItem("ACCESS_TOKEN");
    this.router.navigateByUrl('\welcome');
  }
  url:any;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      // const fileReader: FileReader = fileReader();
      reader.onload = (event:Event) => { // called once readAsDataURL is completed
     
          this.url = reader.result;
        }
    }
  }
}
