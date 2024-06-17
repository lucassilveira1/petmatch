import { Injectable } from '@angular/core';
import { Cat } from 'src/app/models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private images: Cat[] = [
    {
      id: "31h",
      url: "https://cdn2.thecatapi.com/images/31h.jpg",
      catName: "Mel",
      age: "3 meses",
      isFavorite: false
    },
    {
      id: "4pp",
      url: "https://cdn2.thecatapi.com/images/4pp.jpg",
      catName: "Jade",
      age: "8 meses",
      isFavorite: false
    },
    {
      id: "71c",
      url: "https://cdn2.thecatapi.com/images/71c.jpg",
      catName: "Perola",
      age: "2 meses",
      isFavorite: false
    },
  ];

  constructor() { }

  getCats(): Cat[] {
    return this.images.slice(0, 3);
  }
}
