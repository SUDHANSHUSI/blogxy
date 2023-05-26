
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import {AccountserviceService} from '../accountservice.service';
  import {Accountinfo} from '../accountinfo';
  @Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
  })
  export class RegistrationComponent implements OnInit {
    regForm!: FormGroup;
    datasaved = false;
    message!: string;


    constructor( private accountservice: AccountserviceService) { }

    ngOnInit() {  
      this.regForm = new FormGroup({
        Name: new FormControl('', Validators.required),
        Email: new FormControl('', [Validators.required]),
        Password: new FormControl('', Validators.required),
      });
    }
    
    onSubmit() {    
      let userinfo = this.regForm.value;
  // console.log(userinfo);
      this.createuserAccount(userinfo);
      this.regForm.reset();
    }
    createuserAccount(accinfo:Accountinfo) {
      this.accountservice.createaccount(accinfo).subscribe(
        () => {
          this.datasaved = true;
          this.message = "User Created";
        this.regForm.reset();
        }
      )
    }
  }
