import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { type } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  trendingHorses: any
  popularHorses: any
  constructor(private http:HttpClient, private router: Router) {}

  ngOnInit():void {
    this.getTrendingHorses();
    this.getPopularHorses();
  }

  getTrendingHorses() {
    this.http.get('http://localhost:4200/assets/data/trending-horses.json')
    .subscribe((horses) => {
      this.trendingHorses = horses
    });
  }
  getPopularHorses() {
    this.http.get('http://localhost:4200/assets/data/popular-horses.json')
    .subscribe((horses) => {
      this.popularHorses = horses
    });
  }
  goToHorse(types: string, id:string){
    this.router.navigate(["horse,",types,id])
  }

}
