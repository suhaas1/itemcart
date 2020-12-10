import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'site-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.less']
})
export class LoginRegisterComponent implements OnInit {

  @Input() logRegActive: boolean;
  @Output() change = new EventEmitter();
  viewMode: string;

  //login register toggle
  bodyElement = document.querySelector('body');
  loginRegisterClose() {
    this.logRegActive = !this.logRegActive;
    this.change.emit(this.logRegActive);
    this.bodyElement.classList.remove('hideScroll');
  }

  //form validation
  formLogin = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void { 
    //login register change
    this.viewMode = "loginView";
  }

}
