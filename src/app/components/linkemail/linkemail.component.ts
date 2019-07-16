import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-linkemail',
  templateUrl: './linkemail.component.html',
  styleUrls: ['./linkemail.component.css']
})
export class LinkemailComponent implements OnInit {
message:string;
  constructor(private router: Router, private auth: AuthService,private route: ActivatedRoute) { }

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
    this.auth.linkEmail(id).subscribe((res) => {
      if (res.status==0) this.message="Your account is already activated!";
      else this.message="Congratulation! Your account is activated";
      console.log(res.message);
     
    })
  }


}
