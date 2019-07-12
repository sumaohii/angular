import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-link-email',
  templateUrl: './link-email.component.html',
  styleUrls: ['./link-email.component.css']
})
export class LinkEmailComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

}
