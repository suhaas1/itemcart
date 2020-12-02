import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'site-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.less']
})
export class LoginRegisterComponent {

  @Input() logRegActive: boolean;
  @Output() change = new EventEmitter();

  //login register toggle
  bodyElement = document.querySelector('body');
  loginRegisterClose() {
    this.logRegActive = !this.logRegActive;
    this.change.emit(this.logRegActive);
    this.bodyElement.classList.remove('hideScroll');
  }

  //login register change
  viewMode = "loginView";

  //form validation
  formLogin = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

}
