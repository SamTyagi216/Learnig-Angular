import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  FormBuilder:any;
  
  loginForm!: FormGroup;
  error: string = '';

  // Static credentials
  staticCredentials = {
    username: 'sam',
    password: 'sam'
  };

  constructor(private fb: FormBuilder, private router: Router, private el: ElementRef, private renderer: Renderer2,) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    const showPasswordCheckbox = document.getElementById('showPassword') as HTMLInputElement;

    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
  }

  loginUser() {
    if (this.loginForm.valid) {
      const enteredUsername = this.loginForm.get('username')!.value;
      const enteredPassword = this.loginForm.get('password')!.value;

      // Check against static credentials
      if (enteredUsername === this.staticCredentials.username && enteredPassword === this.staticCredentials.password) {
        // Navigate to the dashboard on successful login
        this.router.navigate(['/dashboard']);
        console.log("sam : ", this.loginForm.value)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successful login, now you are moving to dashhboard",
          showConfirmButton: false,
          timer: 300
        });
      } else {
        this.error = 'Invalid username or password';
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "Invalid username or password!",
          //footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    }
  }
  
  onClick() {
    const passwordInput = this.el.nativeElement.querySelector('#password');
    const passwordToggle = this.el.nativeElement.querySelector('#password-toggle');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.renderer.addClass(passwordToggle, 'fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      this.renderer.removeClass(passwordToggle, 'fa-eye-slash');
    }
  }

}