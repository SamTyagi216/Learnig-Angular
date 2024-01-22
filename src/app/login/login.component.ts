import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  error: string = '';

  // Static credentials
  staticCredentials = {
    username: 'sam',
    password: 'sam'
  };

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  loginUser() {
    if (this.loginForm.valid) {
      const enteredUsername = this.loginForm.get('username')!.value;
      const enteredPassword = this.loginForm.get('password')!.value;

      // Check against static credentials
      if (enteredUsername === this.staticCredentials.username && enteredPassword === this.staticCredentials.password) {
        // Navigate to the dashboard on successful login
        this.router.navigate(['/dashboard']);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successful login now you are moving to dashhboard",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        this.error = 'Invalid username or password';
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid username or password!",
          //footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    }
  }

}