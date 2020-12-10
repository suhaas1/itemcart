import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.less']
})
export class AdminLoginComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(username, password) {
    if (username.value == "admin" && password.value == "admin") {
      this.router.navigate(['admin/dashboard']);
    } else {
      alert("name pasword not correct")
    }
  }

}
