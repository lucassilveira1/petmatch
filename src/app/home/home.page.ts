import { Component } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string ='';
  password: string ='';
  successMessage: boolean = false;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3000);
  }

  googleLogin() {
    this.authService.googleLogin();
  }
}
