import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
  showPassword: boolean = false;

  // Hardcoded credentials for demo purposes
  staticCredentials = {
    username: 'admin@example.com',
    password: 'admin123'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  loginUser() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Debug logs for form values
      console.log('Username:', username);
      console.log('Password:', password);

      if (
        username === this.staticCredentials.username &&
        password === this.staticCredentials.password
      ) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successful login! Redirecting to dashboard...',
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.showError('Invalid username or password.');
      }
    } else {
      this.showError('Please fill in all required fields.');
    }
  }

  private showError(message: string) {
    this.error = message;
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: message,
    });
  }
}
