import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertService} from '../../components/alert/alert.service';
@Component({
  selector: 'app-kyc-image',
  templateUrl: './kyc-image.component.html',
  styleUrls: ['./kyc-image.component.css']
})
export class KycImageComponent implements OnInit {
  selectedFile: File
  selectedFile2: File

  status:number;
  message:string;

  form= new FormData();

  constructor(private auth: AuthService, private router:Router, private fb: FormBuilder, private alert: AlertService) { }

  ngOnInit() {
    this.auth.fetchKycStatus().subscribe((res)=>{
      this.message=res.message;
      this.status=res.status;
    })
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
}
  onFileSelected2(event) {
  this.selectedFile2 = event.target.files[0];
  console.log(this.selectedFile2);
}
  onUpload(){
    this.form.append("myImage", this.selectedFile);
    this.form.append("myImage", this.selectedFile2);
    return this.auth.sendKycImage(this.form).subscribe((res) => {
      console.log(res.message+". Redirecting to main profile...");
      this.alert.success(res.message);
      setTimeout(() => {this.router.navigateByUrl('/dashboard');}, 1500);
  })
  }
}
