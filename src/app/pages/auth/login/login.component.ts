import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl('aaa@aa', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if (this.email.value === "aaa@aa" && this.password.value === "aaa") {
      console.log("Successfully")
      this.router.navigate(['app/home'])
      localStorage.setItem('User', 'true')
    } else {
      this.router.navigate([''])
    }
  }

}
