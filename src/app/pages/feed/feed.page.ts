import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { CatApiService } from 'src/app/services/api/cat-api.service';
import { DogApiService } from 'src/app/services/api/dog-api.service';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  userData: any;
  cats: Cat[] = [];
  dogs: any[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private catApiService: CatApiService,
    private dogApiService: DogApiService,
  ) { }

  deslogar() {
    this.authService.logout();
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      console.log('Dados do usuário:', user);
      this.userData = user;
    });

    this.cats = this.catApiService.getCats();
    this.dogs = this.dogApiService.getDogs();
  }

  toggleFavorite(cat: Cat) {
    cat.isFavorite = !cat.isFavorite;
  }
}
