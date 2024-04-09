import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent implements OnInit {
  themes: Theme [] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    this.api.getThemes().subscribe(themes => {
      console.log(themes);
      this.themes = themes
    
  })
  }
}
