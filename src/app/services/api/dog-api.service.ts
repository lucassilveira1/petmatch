import { Injectable } from '@angular/core';
import { Dog } from 'src/app/models/dog';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  private images = [
    {
      "id": "j",
      "url": "https://images.dog.ceo/breeds/retriever-golden/n02099601_280.jpg",
      "dogName": 'Bob',
      "age": '9 Meses',
      "raca": 'Golden Retrivier',
      isFavorite: false
      },
      {
      "id": "ar",
      "url": "https://images.dog.ceo/breeds/hound-blood/n02088466_8950.jpg",
      "dogName": 'Marley',
      "age": '2 Anos',
      isFavorite: false
      },
      {
      "id": "34v",
      "url": "https://images.dog.ceo/breeds/hound-walker/n02089867_3335.jpg",
      "dogName": 'Cory',
      "age": '1 Ano',
      "raca": 'Hound',
      isFavorite: false
      },
  ]


  constructor() { }

  getDogs(): Dog[] {
    return this.images.slice(0, 3);
  }

}
