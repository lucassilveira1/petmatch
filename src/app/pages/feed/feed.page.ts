import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  userData: any;

  constructor(private authService: AuthService, private userService: UserService) { }

  deslogar() {
    this.authService.logout();
  }

  ngOnInit() {
    
    this.userService.getUser().subscribe(user => {
      console.log('Dados do usuário:', user);
      this.userData = user;
    });
  }

}
