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
  staticCredentials = {
    username: 'Karnal',
    password: 'Karnal'
  };

  @ViewChild('passwordInput', { static: false }) passwordInput!: ElementRef<HTMLInputElement>;

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
    if (this.passwordInput) {
      const passwordType = this.showPassword ? 'text' : 'password';
      this.renderer.setAttribute(this.passwordInput.nativeElement, 'type', passwordType);
    }
  }

  loginUser() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      if (
        username === this.staticCredentials.username &&
        password === this.staticCredentials.password
      ) {
        this.router.navigate(['/dashboard']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successful login! Redirecting to dashboard...',
          showConfirmButton: false,
          timer: 2000,
        });
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
