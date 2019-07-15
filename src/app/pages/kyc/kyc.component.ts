import { Component } from '@angular/core';

@Component ({
    selector: "app-maincontent",
    templateUrl: "kyc.component.html"
})

export class KycComponent{
    tabIndex:number = 1;
    public imagePath;
    public imagePath1;
    imgURL: any;
    imgURL1: any;
    public message:string;
    imgName:string = 'Choose file';
    imgName1:string = 'Choose file';
    changTab(tabIndex)
    {
        this.tabIndex = tabIndex;
    }
    preview(files){
        if(files.length==0)
            return;
        var mimeType = files[0].type;
        if(mimeType.match(/image\/*/) == null){
            this.message = "Only images file are supported.";
            return;
        }

        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            this.imgName = files[0].name;
        }
    }

    preview1(files){
        if(files.length==0)
            return;
        var mimeType = files[0].type;
        if(mimeType.match(/image\/*/) == null){
            this.message = "Only images file are supported.";
            return;
        }

        var reader = new FileReader();
        this.imagePath1 = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL1 = reader.result;
            this.imgName1 = files[0].name;
        }
    }
    // preview(e){
    //     console.log(e);
    //     this.imgURL = e.srcElement.value;
    // }
}