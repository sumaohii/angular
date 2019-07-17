import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kyc-image',
  templateUrl: './kyc-image.component.html',
  styleUrls: ['./kyc-image.component.css']
})
export class KycImageComponent implements OnInit {
  selectedFile: File
  // selectedFile2: File
 
  form= new FormData();
  constructor(private auth: AuthService, private router:Router, private fb: FormBuilder) { }

  ngOnInit() {
    
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
}
//   onFileSelected2(event) {
//   this.selectedFile2 = event.target.files[0];
//   console.log(this.selectedFile2);
// }
  onUpload(){
    // const files = [];
    // files.push(this.selectedFile1);
    // files.push(this.selectedFile2);
    // console.log(files.values)
    this.form.append("myImage", this.selectedFile);
    return this.auth.sendKycImage(this.form).subscribe((res) => {
      console.log(res.message);
  })
  }
}
