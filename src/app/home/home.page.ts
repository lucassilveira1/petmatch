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

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
  }

  googleLogin() {
    this.authService.googleLogin();
  }
}
